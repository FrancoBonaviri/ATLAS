import React, { Children, Component } from 'react';
import './App.css';

//Components 
import Card from './Components/Card/Card';
import CreateFileModal from './Components/CreateFileModal/CreateFileModal';
import UpADir from './Components/UpADir/UpADir';
import MakeDirModal from './Components/MakeDirModal/MakeDirModal';


import path from 'path';
import axios from 'axios';
const api = axios;


export class App extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      path: '',
      directories: [],
      files: [],
    }
  }


  componentDidMount() {
    this.setContent(this.state.path);
  }


  async setContent(path) {
    const res = await api.get(`http://localhost:8000/?route=${path}`);
    this.setState({
      files: res.data.content.files,
      directories: res.data.content.directories,
      path
    });

  }

  OpenADir = async(dir) => {
    this.setContent(this.state.path + '/' + dir);
  }

  UpADir = () => {
    const array = this.state.path.split('/')
    array.pop();
    let newPath = '';
    array.forEach( string => {
      if(string === '' ) { return } else {
        newPath = newPath + '/' + string;
      } 
    });
    this.setContent(newPath);
  }

  DownLoadFile = (filename) => {
    console.log(filename)
  }  


  render() {


    const direcs = this.state.directories.map(dir => 
      <Card key={dir} Name={dir} type="dir" OnClick={() => this.OpenADir(dir)}/>
    );
    const files = this.state.files.map(file => 
      <Card key={file} Name={file} type="file" OnClick={() =>  this.DownLoadFile(file)}/>
    );



    return (
      <div className="container p-5">
        <div className="row mb-3">
          <div className="col-md-8 offset-md-2">
            <form className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><icon className="fa fa-search"></icon></span>
                </div>
                <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
            </form>
          </div>
        </div>
  
   
  
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <button type="button" data-toggle="modal" data-target="#modalMkDir" className="btn btn-primary btn-lg btn-block">
              <div className="row">
                <div className="col-8 text-left">
                  Create Directory
                </div>
                <div className="col-4 text-right">
                  <i className="fas fa-folder-open ml-1"></i>
                </div>
              </div>
            </button>
            <button type="button" data-toggle="modal" data-target="#modalFileUpload" className="btn btn-secondary btn-lg btn-block">
              <div className="row">
                <div className="col-8 text-left">
                  Upload File
                </div>
                <div className="col-4 text-right">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
              </div>
            </button>
          </div>
        </div>
  
  
  
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <UpADir Capture={() => this.UpADir()}/>
            {direcs}
            {files}
          </div>
        </div>
  
  
  
  
        <CreateFileModal path={this.state.path} OnClick={() => this.setContent(this.state.path)}/>
        <MakeDirModal path={this.state.path} OnClick={() => this.setContent(this.state.path)}/>
      </div>
      
    );
  }
}
export default App;
