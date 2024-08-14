import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState('');

    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");
        
    }

    const handleLowClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success");
    }
    
    const handleClearClick= ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("text cleared", "success");
    }

    

    const handleOnChnage=(event)=>{
        setText(event.target.value)
    }

    const handleCopyClick =()=> {
            navigator.clipboard.writeText(text);
            props.showAlert("text copied ...", "success");
    }

    const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

    

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChnage} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className="conatiner my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{wordCount} words, {text.length} characters</p>
        <p>{0.008 * wordCount} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter any text to preview"}</p>
    </div>
    </>
  )
}
