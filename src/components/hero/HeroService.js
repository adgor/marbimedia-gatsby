import React from 'react'
import Technology from '../assets/technology.svg'

export const HeroService = () => {
  return (
    <section className='bg-brand-richBlack'>
      <div className='relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
        <div className='grid items-center pb-10 lg:grid-cols-2'>
          <div className='w-full'>
            <h2 className='mb-6 max-w-lg uppercase text-3xl font-extrabold text-brand-purple sm:text-5xl'>
            your vision 
              <br />
              <span className='font-bold text-white'>into reality</span>
            </h2>
            <p className='px-0 text-lg text-white md:text-xl'>
              SiteBuilder, 1-click app installer or with a couple of clicks,
              with our simple, secure, scalable and easy hosting solutions you
              can have your website online.
            </p>
          </div>
          <div className='ml-auto w-[440px] text-center'>
            <Technology />
          </div>
        </div>
      </div>
    </section>
  )
}
