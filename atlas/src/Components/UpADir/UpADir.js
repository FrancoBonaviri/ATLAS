import React, { Component } from 'react'
import './UpADir.css'


export class UpADir extends Component {
    render() {
        return (
            <div className="row" onClickCapture={this.props.Capture}>
                <div className="card card-body card-link mt-4 updir-card">
                    <div className="row">
                        <div className="col-8">
                            <h5><i className="fas fa-arrow-alt-circle-left mr-3"></i>Up a Dir...</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpADir
 