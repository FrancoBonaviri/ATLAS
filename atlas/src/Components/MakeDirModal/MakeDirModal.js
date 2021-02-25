import React, { Component } from 'react'
import Api from '../../services/api';
export class MakeDirModal extends Component {
    render() {
        return (
            <div className="modal" tabIndex="-1" id="modalMkDir">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="dirName">Folder Name</label>
                                    <input type="text" name="dirName" id="inFolderName" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" id="btnCerrar" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClickCapture={() => this.CreateFolder(this.props.path)}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }




    CreateFolder(path) {
        let folderName = '';
        if(document.querySelector('#inFolderName').value.trim() === '') {
            document.querySelector('#inFolderName').classList.add('is-invalid');
            return;
        } else {
            document.querySelector('#inFolderName').classList.remove('is-invalid');
            folderName = document.querySelector('#inFolderName').value;
        }

        if(path === '') {path = '/'};

        //Creo el directorio -> 
        Api.MakeDir(path, folderName);

        this.props.OnClick();
        document.getElementById('btnCerrar').click();
    }
}

export default MakeDirModal
