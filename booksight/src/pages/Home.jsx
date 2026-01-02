import React from 'react'
import FeaturedBooks from '../components/FeaturedBooks';
import BookSearch from '../components/BookSearch';

const Home = () => {
  return (
   <>
 <div className='flex container justify-between gap-50 mx-auto p-4 md:p-8 lg:p-12'>
  <div className='w-full md:w-1/2'>
    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-10' style={{ color: '#F19595' }}>BEAT YOUR READING GOALS, ENJOY THE CULTURE</h1>
    <p className='text-lg mb-8 text-black-600 text-opacity-70'>Find books, keep track of your reading, explore the world of books.</p>
    <div className='flex'>
    
      <BookSearch />
    <button className='bg-[#F19595] rounded px-3 py-3xl text-2xl text-white-500'>search</button>
    </div>
  </div>
  <div className='hidden md:block md:w-1/2'>
    <img 
      src="https://images.unsplash.com/photo-1560184354-08f448998197?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="person reading" 
      className='w-100 h-100 object-cover rounded-lg'
    />
  </div>
</div>

<FeaturedBooks />
   </>
  )
}

export default Home;