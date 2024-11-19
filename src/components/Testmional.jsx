import React from 'react'
import {testimonials} from '../constants'
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";


const Testmional = () => {
  return (
    <div className="mt-20 tracking-wide" id={'testmional'}>
    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
      What People are saying
    </h2>
    <div className='flex flex-wrap'>
        {testimonials.map((test,index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                   <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                    <p>{test.text}</p>
                <p>{test.user}</p>
                <div className="flex mt-8 items-start">
                  <img src={test.image} className="w-12 h-12 mr-6 rounded-full border border-neutral-300" alt="" />
                    </div>
                    <h6>{test.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {test.company}
                  </span>
                </div>
                 </div>
        ))}

    </div>
    </div>
  )
}

export default Testmional