import React,{useState} from 'react'

export default function Textform(props) {
    const [Text, setText] = useState("Enter the text here");
    
    const handleupclick= ()=>{
      let newtext=Text.toUpperCase()
      setText(newtext)
    }
      
    const handleuupclick= ()=>{
        let newtext=Text.toLowerCase()
        setText(newtext)
      }
      
    
    const handleonchange= (event)=>{
       console.log("onclick")
        setText(event.target.value)
    }

  return (
    <>
    
<div className="mb-3">
    <h1 style={{color:props.Mode==='dark'?'white':'black'}} >{props.heading}</h1>
  <textarea className="form-control" value={Text} onChange={handleonchange} style={{backgroundColor:props.Mode==='dark'?'gray':'white',color:props.Mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
  
</div>
<button type="button" className="btn btn-primary"  onClick={handleupclick}>convert to Uppercase</button>
<button  type="button" className="btn btn-primary" onClick={handleuupclick}>convert to lowercase</button>
   <div style={{color:props.Mode==='dark'?'white':'black'}}>
    <h2>Your tetx summary</h2>
    <p>Total words {Text.split(" ").length} And Total characters {Text.length}</p>
    <button type="button" className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#demo">Display Text</button>
  <div id="demo" className="collapse w-50 p-3" >
    {Text}
  </div>
  </div>
    </>
  );
}
 