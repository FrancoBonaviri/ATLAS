import React, { Component } from 'react'
import Api from '../../services/api';

export class CreateFileModal extends Component {


    UploadFile = (path) => {

        var file = document.querySelector('#inputFile').files[0];
        if(file === undefined || !file){
            document.querySelector('#inputFile').classList.add('is-invalid');
        } else {
            document.querySelector('#inputFile').classList.remove('is-invalid');
        }

        if(path === '') {path = '/'};

        let form = new FormData();
        form.append("files", file);

        
        Api.UploadFiles(path, form)

        this.props.OnClick();
        document.getElementById('btnDismiss').click();


    }

    change = () => {
        let array = document.querySelector('#inputFile').files;
        document.querySelector("#lblFile").innerHTML = array[0].name;
    }

    render() {
        return (
            <div className="modal" id="modalFileUpload">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputFile" onChangeCapture={() => this.change()}/>
                                    <label id="lblFile"className="custom-file-label" htmlFor="inputFile">Choose file</label>
                                </div>
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" id="btnDismiss" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClickCapture={() => this.UploadFile(this.props.path)}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateFileModal
