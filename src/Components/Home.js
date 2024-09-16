import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold mb-4'>Fruit.AI</h1>
      <p className='text-gray-600 mb-8'>"Be Healthy!"</p>

      <div className='flex justify-center'>
        <div className='bg-orange-100 rounded shadow-md w-32 h-32 m-4 text-center'>
          <p className='text-lg font-bold m-3'><Link to="/Chatbot">Chat Bot</Link></p>
        </div>
        <div className='bg-blue-100 p-4 rounded shadow-md w-32 h-32 m-4 text-center'>
          <p className='text-lg font-bold'></p>
        </div>
      </div>

      <div className='flex justify-center mb-4'>
        <div className='bg-green-100 p-4 rounded shadow-md w-32 h-32 m-4 text-center'>
          <p className='text-lg font-bold m-6'></p>
        </div>
        <div className='bg-red-100 p-4 rounded shadow-md w-32 h-32 m-4 text-center'>
          <p className='text-lg font-bold'><Link to="/Translator">Translator</Link></p>
        </div>
      </div>

      <div className='flex justify-center mb-4'>
        <div className='bg-yellow-100 p-4 rounded shadow-md w-32 h-32 m-4 text-center'>
          <p className='text-lg font-bold'><Link to="/FAQ">FAQs</Link></p>
          
        </div>
        <div className='bg-purple-100 p-4 rounded shadow-md w-32 h-32 m-4 text-center'>
          <p className='text-lg font-bold'><Link to="/About">About</Link></p>
         </div>
        
        
        
      </div>
    </div>
  );
};

export default Home;