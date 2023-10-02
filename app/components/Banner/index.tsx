"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
 
const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-10 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2  mx-10 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>Let's Code</button>
                    </div>
                    <div className="py-3  -mx-4 text-center lg:text-start ">
                        <h5 className='text-4xl lg:text-45xl font-bold text-darkpurple'>
                        <TypeAnimation sequence={[
                             `Dedicated to\n bring your \n to \n empowering individuals  \n  in \n\n\n  Tech Journey.
    
                            `, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                            1000,
                            '',
                                
      ]}
   
      repeat={Infinity}
      style={{ display: 'inline-block', margin: "0 72px" }}
     
    />
                              
                        </h5>
                        <p className="text-2xl font-bold py-2 mx-24">Our mission is to
                        make quality tech education accessible to everyone, 
                                regardless of their background or financial constraints.</p>
                    </div>
                    <div className='mx-4 my-7 text-center space-x-10  px-4 lg:text-start'>
                       <a href="https://competitions-and-programs-list.vercel.app/"> <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                       Competition and <br/>Program List for Students
                        </button></a>
                      
                    </div>
                   
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden px-5 lg:block'>
                    <Image src="/images/banner/banner.svg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
