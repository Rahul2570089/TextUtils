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

    let b = text.length === 0 ? 0 : text.split(" ").length

    return (
        <>
            <div className="container">
                <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="mybox" rows="8" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}></textarea>
                    <button className='btn btn-primary my-3' onClick={handleclickupper}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-3" onClick={handleclicklower}>Convert to Lowercase</button>
                    <button className="btn btn-primary" onClick={handleclear}>Clear text</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 className='my-4'>Text summary</h1>
                <p>{b} words</p>
                <p>{text.length} characters</p>
            </div>
        </>
    )
}
