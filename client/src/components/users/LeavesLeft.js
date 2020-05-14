import React, { Component } from "react";
import "./faculty.css";


class LeavesLeft extends Component {
    returnList(el){
           return el.map( (element)=>{
               return(
                <div className="leaves-table-row">
                    <div className="table-data">{element.title}</div>
                    <div className="table-data">{element.total}</div>
                    <div className="table-data">{element.remaining}</div>
                    <div className="table-data">{element.count}</div>
                </div>
               )
                
           } )
    }
    render(){
        return (
            <div className="faculty-main-div">
                <div className="card-main-div"> 
                    <div className="leave-list-left">
                        <div className="name-faculty">{ this.props.data.name }</div>
                        <div className="description-faculty">{ this.props.data.designation }</div>
                        <div className="description-faculty">{ this.props.data.department }</div>

                        <div className="list-leaves">
                            <div className="leaves-left-head">
                                <div className="span-div-heaves-head">  </div>
                                <div>LEAVES LEFT :</div>
                            </div>
                            <div className="leave-list-outer-div">
                                <div className="leave-table-div">
                                    {this.returnList( this.props.data.leaves )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="faculty-img-div">
                            <img className="faculty-img" src={this.props.data.image} />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default LeavesLeft;