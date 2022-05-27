import React, {useState} from 'react';

import './Button.css';


export default function Form(props){
    
    const HandleClear = ()=>{
        console.log("Text is Clear")
        // alert("hello")
        setText("")
    }
    const HandleClear2 = ()=>{
        console.log("Ready to use")
        if(text=="initialState") {
            setText("")  
        }
        // alert("hello")
        setText("")
    }
    const HandleUpCase = ()=>{
        console.log("Text is Converted into Upper Case")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleLowCase = ()=>{
        console.log("Text is Converted into Lower Case")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleOnChange = (event)=>{
        console.log("onchange")
        setText(event.target.value);
        
    }
    
    const [text, setText] = useState("initialState");
     return(  
        <div>
<div className="mb-3">
<label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
<textarea className="form-control" value={text} onChange={HandleOnChange} onClick={HandleClear2} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-2" style={{'borderRadius':'25px'}} id="myBoxBut" onClick={HandleUpCase}>UPPER CASE</button>
<button className="rainbow rainbow-1" style={{'borderRadius':'25px' ,'margin':'2px'}} onClick={HandleClear}>Clear</button>
<button className="btn btn-primary mx-2" style={{'borderRadius':'25px'}} onClick={HandleLowCase}>LOWER CASE</button>

<div class="container text-center">
  <h1 class=""> Animated buttons with 
    <span class="a">r</span><span class="b">a</span><span class="c">i</span><span class="d">n</span><span class="e">b</span><span class="f">o</span><span class="a">w</span> hover </h1>
  <a class="rainbow rainbow-1" style={{'borderRadius':'25px' ,'margin':'2px'}} >Click Me!</a>

  <div class="follow">
  <a class="rainbow-4" href="http://twitter.com/althi">Follow me on Twitter</a>

    
</div>
</div>


    



    




</div>
)
}