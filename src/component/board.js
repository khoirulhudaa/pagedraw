import React, {useState, useRef, useEffect, Component} from 'react';
import './index.css';

function Pagedraw(props) {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDraw, setIsDraw] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d");
        context.lineWidth = `${localStorage.getItem('size')}`;
        context.scale(2, 2);
        contextRef.current = context;

    }, [])


    const startDraw = ({nativeEvent}) => {
        const context = canvasRef.current.getContext("2d");
        const {offsetX, offsetY} = nativeEvent;

        context.strokeStyle = `${props.text}`;
        context.lineCap = `${props.type}`;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);

        setIsDraw(true)
    }

    const endDraw = () => {
        contextRef.current.closePath();

        setIsDraw(false)
    }

    const draw = ({nativeEvent}) => {
        const context = canvasRef.current.getContext("2d");
        context.lineWidth = `${props.size}`;

        const {offsetX, offsetY} = nativeEvent;
        if(isDraw) {
            contextRef.current.lineTo(offsetX, offsetY);
            contextRef.current.stroke();
        }
        return
    }

    return (
        <div className="canvas">
            <div className="mode">
                <div className="btn-mode" id="btn-mode" onClick={props.modeOn}>

                </div>
            </div>
            <div className="modes">
                  <div className="list-modes" id="las-modes1" onClick={props.textColorDefault1}><i className="las la-pen i-modes actived-modes" id="i-modes1"></i></div>
                  <div className="list-modes" id="las-modes2" onClick={props.textColorDefault2}><i className="las la-eraser i-modes" id="i-modes2"></i></div>
            </div>
            <canvas
            style={{backgroundColor:`${props.bg}`, color: 'red'}}
            onMouseDown={startDraw}
            onMouseUp={endDraw}
            onMouseMove={draw}
            ref={canvasRef}
            />
            <input type="number" className="lineWidth" id="lineWidth" value={props.width} onChange={props.valueChange} />
        </div>
    )
}

export default Pagedraw;
