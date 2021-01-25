import React from 'react';
import Board from '../../component/board';
import './index.css';

class pageDraw extends React.Component {

    state = {
        size: 5,
        bgc: ' rgb(255, 255, 255)',
        text: '',
        types: 'round',
    }


    modeOn = (e) => {
        e.preventDefault();
        document.getElementById('btn-mode').classList.toggle('dark');
        document.getElementById('settBar').classList.toggle('darkBar');
        document.getElementById('btn-export').classList.toggle('darkEx');
    }

    lineWidth = (e) => {
        const texts = document.querySelectorAll('.li-colors2');
        texts.forEach(details => {
            details.classList.remove('actived-line2')
        })
        const datas = e.target.getAttribute('id');
        document.getElementById(datas).classList.add('actived-line2')

        let sizes = e.target.getAttribute('size');
        this.setState({
            size: sizes
        })
    }

    bg = (e) => {
        const texts = document.querySelectorAll('.li-bg');
        texts.forEach(details => {
            details.classList.remove('actived-bg')
        })
        const datas = e.target.getAttribute('id');
        document.getElementById(datas).classList.add('actived-bg')

        let bgs = e.target.getAttribute('primary');
        this.setState({
            bgc: bgs
        })
    }

    textColor = (e) => {
        const text = document.querySelectorAll('.li-colors');
        text.forEach(details => {
            details.classList.remove('actived-color')
        })
        const data = e.target.getAttribute('id');
        document.getElementById(data).classList.add('actived-color')

        let txts = e.target.getAttribute('primary');
        localStorage.setItem('textColor', JSON.stringify(txts));
        this.setState({
            text: txts
        })
    }

    typeLine = (e) => {
        const texts = document.querySelectorAll('.li-line');
        texts.forEach(details => {
            details.classList.remove('actived-lines')
        })
        const datas = e.target.getAttribute('id');
        document.getElementById(datas).classList.add('actived-lines')

        let typesX = e.target.getAttribute('primary');
        this.setState({
            types: typesX
        })
    }

    save = (e) => {
        var can = document.getElementsByTagName("canvas");
        var src = can[0].toDataURL("image/png");
        document.write('<img src="' + src + '"/>');
    }

    textColorDefault1 = (e) => {
      const texts = document.querySelectorAll('.i-modes');
      texts.forEach(details => {
          details.classList.remove('actived-modes')
      })
      document.getElementById('i-modes1').classList.add('actived-modes')

      const colorBack = JSON.parse(localStorage.getItem('textColor'));

      this.setState({
        text :  colorBack
      })
    }

    textColorDefault2 = (e) => {
      const texts = document.querySelectorAll('.i-modes');
      texts.forEach(details => {
          details.classList.remove('actived-modes')
      })
      document.getElementById('i-modes2').classList.add('actived-modes')

      this.setState({
        text :  this.state.bgc
      })
    }

    render() {
        const { modeOn, lineWidth, bg, textColor, typeLine, save, textColorDefault1, textColorDefault2 } = this;
        const { size, bgc, text, types } = this.state;

        return (
            <div>
                <div className="boardPage">
                    <div className="bar drawBar">
                        <Board id="myCanvas" modeOn={modeOn} size={size} bg={bgc} text={text} type={types} textColorDefault1={textColorDefault1} textColorDefault2={textColorDefault2}/>
                    </div>
                    <div className="bar settBar" id="settBar">
                        <div className="title-bar">
                            <h2><i className="las la-cog"></i> Setting bar</h2>
                        </div>
                        <div className="control-sett">
                            <div>
                                <span><i class="las la-fill-drip"></i> warna garis</span>
                                <div>
                                    <ul>
                                        <li className="li-colors actived-color" id="li-colors" onClick={textColor} primary="black"></li>
                                        <li className="li-colors" id="li-colorsX1" onClick={textColor} primary="white"></li>
                                        <li className="li-colors" id="li-colorsX2" onClick={textColor} primary="rgb(204, 204, 204)"></li>
                                        <li className="li-colors" id="li-colors1" onClick={textColor} primary="orange"></li>
                                        <li className="li-colors" id="li-colors2" onClick={textColor} primary="rgb(255, 238, 0)"></li>
                                        <li className="li-colors" id="li-colors4" onClick={textColor} primary="rgb(0, 255, 170)"></li>
                                        <li className="li-colors" id="li-colors6" onClick={textColor} primary="rgb(0, 132, 255)"></li>
                                        <li className="li-colors" id="li-colors7" onClick={textColor} primary="rgb(174, 0, 255)"></li>
                                        <li className="li-colors" id="li-colors8" onClick={textColor} primary="rgb(255, 0, 55)"></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <span><i class="las la-grip-lines-vertical"></i> tebal garis</span>
                                <div>
                                    <ul>
                                        <li className="li-colors2" id="li-line1" onClick={lineWidth} size={1}>1</li>
                                        <li className="li-colors2" id="li-line2" onClick={lineWidth} size={2}>2</li>
                                        <li className="li-colors2" id="li-line3" onClick={lineWidth} size={3}>3</li>
                                        <li className="li-colors2" id="li-line4" onClick={lineWidth} size={4}>4</li>
                                        <li className="li-colors2 actived-line2" id="li-line5" onClick={lineWidth} size={5}>5</li>
                                        <li className="li-colors2" id="li-line6" onClick={lineWidth} size={6}>6</li>
                                        <li className="li-colors2" id="li-line7" onClick={lineWidth} size={7}>7</li>
                                        <li className="li-colors2" id="li-line8" onClick={lineWidth} size={8}>8</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <span><i class="las la-grip-lines"></i> type garis</span>
                                <div>
                                    <ul>
                                        <li className="li-line actived-lines" id="line1" onClick={typeLine} primary="round">round</li>
                                        <li className="li-line" id="line2" onClick={typeLine} primary="square">square</li>
                                        <li className="li-line" id="line3" onClick={typeLine} primary="butt">butt</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <span><i class="las la-fill"></i> warna background</span>
                                <div>
                                    <ul>
                                        <li className="li-bg actived-bg" id="line-bg1" onClick={bg} primary="white"></li>
                                        <li className="li-bg" id="line-bg2" onClick={bg} primary="rgb(199, 241, 9)"></li>
                                        <li className="li-bg" id="line-bg3" onClick={bg} primary="rgb(85, 85, 85)"></li>
                                        <li className="li-bg" id="line-bg4" onClick={bg} primary="rgb(255, 187, 0)"></li>
                                        <li className="li-bg" id="line-bg6" onClick={bg} primary="rgb(150, 150, 250)"></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="export">
                                <button className="btn-export" id="btn-export" onClick={save}>
                                    export draw me
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default pageDraw;
