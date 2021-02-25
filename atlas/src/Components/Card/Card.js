import React, { Component } from 'react'
import './Card.css'



export class Card extends Component {
    render() {
        return (
            <div className="row">
                <div className="card card-body card-link mt-4" onClickCapture={this.props.OnClick} style={{cursor:"pointer"}}>
                    <div className="row">
                        <div className="col-8">
                            {this.SetIcon(this.props.type, this.props.Name)}
                        </div>
                        <div className="col-4 text-right">
                            {this.SetActions(this.props.type)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    SetActions( type ) {
        if(type === 'file') {
            return (
                <h5>
                    <i className="fas fa-arrow-circle-down p-2"></i>
                                    <i className="fas fa-trash p-2"></i>
                </h5>
            );
        } else if( type === 'dir') {
            return (
                <h5>
                                    <i className="fas fa-trash p-2"></i>
                </h5>
            )
        }
    }

    SetIcon( type, name ) {
        if(type === 'file') {
            return (    
                <h5><i className="fas fa-file m-1"></i>  { name }</h5>
            )
        } else if( type === 'dir'){
            return (    
                <h5><i className="fas fa-folder m-1"></i>  { name }</h5>
            )
        }
    }
}

export default Card
