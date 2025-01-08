import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img className='hero-banner' src={hero_banner} alt="banner" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero-title" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in  modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
        </div>
      </div>
      <TitleCards/>
      <TitleCards title={'Blockbuster Movies'}/>
      <TitleCards title={'Only on Netflix'}/>
      <TitleCards title={'upcoming'}/>
      <TitleCards title={'Top picks for you'}/>
    </div>
  )
}

export default Home
