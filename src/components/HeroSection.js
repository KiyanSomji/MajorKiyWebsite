import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/intro.mp4" autoPlay loop muted />
        <h1>Major Kiy Movements</h1>
        <p> Designing our Digital Future TOGETHER</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>GET STARTED</Button>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'/> </Button>
        </div>
        
    </div>
  );
}

export default HeroSection