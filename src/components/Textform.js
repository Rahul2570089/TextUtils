import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('');

    const handleclickupper = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }

    const handleonchange = (event) => {
        setText(event.target.value)
    }

    const handleclicklower = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }

    const handleclear = () => {
        let newtext = '';
        setText(newtext);
    }


    return (
        <>
            <div className="container my-2">
                <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode==='dark' ? 'white' : '#042743'}}></textarea>
                    <button disabled={text.length===0} className='btn btn-primary mx-1 my-3' onClick={handleclickupper}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleclicklower}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleclear}>Clear text</button>
                </div>
            </div>
            <div className="container my-1" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 className='my-4'>Text summary</h1>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words</p>
                <p>{text.length} characters</p>
            </div>
        </>
    )
}
