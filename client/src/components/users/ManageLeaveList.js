import React from 'react';
import "./faculty.css";
import "./ManageLeaveList.css";
import img from "../../images/professor.jfif";
class ManageLeaveList extends React.Component{
    openMore = (el, event) => {
        var x = event.target;
        var a = x.parentNode.parentNode.parentNode;
        var yPosition = 0;
        
        var y = x.parentNode.previousSibling;
        if (y.style.display === "block") {
            x.innerHTML = 'READ MORE';
            y.style.display = "none";
            x.parentNode.parentNode.parentNode.style.backgroundColor = "#f3f1ee";
        } else {
            x.innerHTML = 'READ LESS';
            y.style.display = "block";
            x.parentNode.parentNode.parentNode.style.backgroundColor = "#ffffff";
        }
        
    }
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
    renderList=( list ) =>{
        return list.map( (ele , key)=>{
        return (
                <div className="card-main-div LeavesList-outerdiv">
                    <div className="leave-list-left">
                        <div className="name-faculty">{ ele.name }</div>
                        <div className="description-faculty">{ ele.designation }</div>
                        <div className="description-faculty">{ ele.department }</div>
                        <div className="description-faculty">{ ele.id }</div>
                        <div className="leaves-left-head leaves-left-head-manage">
                                <div className="span-div-heaves-head">  </div>
                                <div>LEAVES LEFT :</div>
                            </div>
                        <div style={{display:'none'}}>
                            
                            <div className="leave-list-outer-div">
                                <div className="leave-table-div">
                                    <div className="table-top-heads">
                                        <div className="table-head-content">TYPE</div>
                                        <div className="table-head-content">TOTAL</div>
                                        <div className="table-head-content">REMAINING</div>
                                        <div className="table-head-content">TAKEN</div>
                                    </div>
                                    {this.returnList( ele.leaves )}
                                </div>
                                <div className="read-more-table">SAVE</div>
                            </div>
                        </div>
                        <div><button className="read-more-table" onClick={this.openMore.bind(this,ele)}>READ MORE</button></div>
                    </div>
                    <div >
                        <div className="faculty-img-div-leaves">
                            <img className="faculty-img" src={ele.image} />
                        </div>
                    </div>
                </div>)
        } )
    }
    render(){
     
        const fetch = [
            {
            name: 'Gunjan Beniwal',
            designation: 'Faculty',
            department: "CSE-E",
            id:87545,
            image: img,
            leaves: [
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
            ],
          },
          {
            name: 'Gunjan Beniwal',
            designation: 'Faculty',
            department: "CSE-E",
            id:87545,
            image: img,
            leaves: [
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
            ],
          },
          {
            name: 'Gunjan Beniwal',
            designation: 'Faculty',
            department: "CSE-E",
            id:87545,
            image: img,
            leaves: [
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
              {
                title: "Earned Leave",
                total:20,
                remaining:10,
                count: 10,
              },
            ],
          }
        ];


        
        return (
            <div className="faculty-main-div">
                {this.renderList(fetch)}
            </div>
        )
    }
}
export default (ManageLeaveList);