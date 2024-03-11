 import image from '../images/Screen_2.png'


const Step_3 = () => {


    return (
        <div className='w-[90%] m-auto'>
            <div className=''>
                <div className='text-white text-center lg:mt-20'>
                    <p className='flex justify-center text-blue-500'>STEP 3</p>
                    <h2 className='flex justify-center lg:text-[50px] pho:text-[30px]  text-white 2xl:text-[75px] font-semibold'>Send Emails & Text Messages</h2>
                    <div className='flex justify-center'><p className='w-[440px] text-slate-400'>No more going through a social platform. Reach and engage
                        your audience directly over email and text massage.</p></div>
                </div>


                <div className='flex lg:mt-[100px]'>
                    <div className='text-white'>
                        <p className='font-semibold mt-4 pho:flex justify-center pho:my-4 lg:block'>Create & Share</p>
                        <img className='flex justify-center  sm:w-full pho:block lg:hidden' src={image} alt=""/>
                        <div className='pho:flex flex-wrap justify-center lg:block'>
                            <h3 className='lg:text-[50px] font-semibold lg:w-[450px] pho:text-[30px] lg:mt-20 '>Reach Your</h3>
                            <h3 className='lg:text-[50px] font-semibold pho:text-[30px]'>Audience  <span className='text-blue-500'>Directly.</span></h3>
                        </div>
                        <div className='flex   pho:justify-center lg:justify-start  items-center gap-2 mt-10'> <p className='bg-slate-800 w-[26px] flex justify-center rounded-[13px] my-2 '>1</p> <p>Embed content or create something new to share.</p></div>
                        <div className='flex pho:justify-center lg:justify-start  items-center  gap-2'><p className='bg-slate-800 px-2 rounded-[13px] my-2 '>2</p> <p>Share content over email, text message or your homepage.</p></div>
                        <div className='flex pho:justify-center lg:justify-start gap-4 my-8'>
                            <button className='bg-blue-600 h-10 px-3 rounded-lg duration-200 hover:bg-blue-700'>Get Started Now</button>
                            <button className='border border-slate-500 rounded-lg text-slate-400 px-4 py-2 hover:text-white duration-200 hover:shadow-white hover:shadow-sm'>View A Demo</button>
                        </div>
                    </div>
                    <div className='pho:hidden pho:overflow-hidden lg:block'>
                        <img className='' src={image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Step_3