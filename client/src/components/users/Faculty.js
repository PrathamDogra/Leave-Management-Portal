import React, { Component } from "react";
import Header from '../common/Header';
import "./faculty.css";
import LeavesLeft from "./LeavesLeft";

import img from '../../images/professor.jfif'
class Faculty extends Component {
    
    render(){
        const fetch = {
            name:"Gunjan Beniwal",
            designation:"Assistant Professor",
            department:"CSE-E",
            image:img,
            leaves:[
                {
                    title:'Earned Leave',
                    count:10
                },
                {
                    title:'Earned Leave',
                    count:10
                },
                {
                    title:'Earned Leave',
                    count:10
                },
                {
                    title:'Earned Leave',
                    count:10
                },
                {
                    title:'Earned Leave',
                    count:10
                },
                {
                    title:'Earned Leave',
                    count:10
                }
            ]
        }
        return (
            <div>
                <Header  name="Gunjan Beniwal"/>
                <LeavesLeft  data={fetch}/>
            </div>
        )
    }
}
export default Faculty;