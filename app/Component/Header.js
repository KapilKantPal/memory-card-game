import React from 'react'

const Header = () => {
  return (
    <section className='header pt-4'>
        <div className='container'>
            <div className='flex'>
                <div className='p-1 border-[1px] mx-auto  border-black rounded-xl bg-[#EEE]'>
                    <div className='header-wrap px-12 px py-4 border-[1px]  border-black rounded-lg bg-paleyellow flex flex-wrap justify-center items-center'>
                        <h1 className='heading flex-grow text-center'>Memory CarD</h1>
                        <img className='flex-shrink-0' src="/joker.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header