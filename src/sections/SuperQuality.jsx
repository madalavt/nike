import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
<div className='flex flex-1 flex-col'>
<h1 className='font-palanquin text-4xl font-bold lg:max-w-lg'>
  <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>We provide you </span>
  <br/>
  <span className='text-coral-red
  inline-block mt-3'>Super</span>
  <span className='text-coral-red
  inline-block mt-3'>Quality</span>Shoes
  </h1>
  <p className='mt-4 lg:max-w-lg info-text'>
    Ensuring premium comfort and style, our meticulously crafted footware is designed to elevate your experience, providing you with 
    unmatched quality, innovation, and a touch of elegance.
  </p>
  <div className='mt-11'>
  <Button label="Shop now"/> 
  </div>
</div>
<div className='flex flex-1 justify-center items-center'>
<img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain'/>
</div>
    </section>
  )
}

export default SuperQuality