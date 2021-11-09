import { useState } from "react";
//import ReactDOM from "react-dom";

function Student() {
  const [studentid,setstudentid] =useState(" ");
  const[studentname,setstudentname]=useState(" ");
  const[address,setaddress]=useState(" ");
  const [coursename, setcoursename] = useState(" ");
  return (
    <>
         <h1 className="ui center aligned icon header">STUDENTS</h1>
        <div >
            <form className="ui form">
                <label className="ui fluid form">STUDENT ID:{studentid}</label>
                <input type="text" value={studentid} name="name" placeholder="STUDENTID"  onChange={(event) => setstudentid(event.target.value)}/>
                </form>
            </div>
            <div >
            <form className="ui form">
                <label>STUDENT NAME:{studentname} </label>
                <input type="text" name="name" value={studentname} placeholder="STUDENT NAME"onChange={(event) => setstudentname(event.target.value)}/>
                </form>
                </div>
                <div >
            <form className="ui form">
                <label>ADDRESS:{address}</label>
                <input type="text" name="name" value={address} placeholder="ADDRESS"onChange={(event) => setaddress(event.target.value)}/>
                </form>
                </div>
                <div >
            <form className="ui form">
                <label>COURSE NAME:{coursename} </label>
                <input type="text" name="name" value={coursename} placeholder="COURSE NAME"onChange={(event) => setcoursename(event.target.value)}/>
                </form>
                </div>
        
                <button className="ui blue button"
              type="button"
              onClick={()=>setstudentid("108")}
              >change studentid</button>
               
               <button className="ui green button"
              type="button"
              onClick={()=>setstudentname("APARNA S NAIR")}
              >change studentname</button>

               <button className="ui orange button"
              type="button"
              onClick={()=>setaddress("NILACKAL HOUSE PUTHUPPALLY PO KAYAMKULAM")}
              >change address</button>     

                 
              <button className="ui pink button"
              type="button"
              onClick={()=>setcoursename("EEE")}
              >change coursename</button>
              

              <button className="ui red button"
              type="button"
              onClick={()=>{setstudentid("108");setstudentname("MALAVIKA");setaddress("nilackal");setcoursename("EEE")}}
              >change</button>
              
               </>
               )}     
               export default Student;
