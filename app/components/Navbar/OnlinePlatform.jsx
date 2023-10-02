

import Link from 'next/link';


const Contactusform = () => {


    return (
        <>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                {/* <div className='lg:hidden'>
                    <button type="button" className='bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded' onClick={openModal}>
                        Contact Us
                    </button>
                </div> */}
                <div className='hidden lg:block'>
                   <Link style={{ textDecoration: 'none', color:'black' }} href="https://free-courses-with-certificates.netlify.app/"> <button type="button" className=' text-green-500   justify-end text-sm font-semibold py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>
                        LMS
                    </button></Link>
                </div>
            </div>

            
        </>
    )
}

export default Contactusform;
