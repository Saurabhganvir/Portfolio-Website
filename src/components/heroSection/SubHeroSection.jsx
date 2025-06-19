import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='flex w-full flex-col mx-auto text-lightGrey border border-lightGrey justify-around xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4'>
        <p className="md:block sm:hidden">Quick Learner</p>
        <p className="md:block sm:hidden">Team Work</p>
        <p >Innovation</p>
    </div>
  )
}

export default SubHeroSection