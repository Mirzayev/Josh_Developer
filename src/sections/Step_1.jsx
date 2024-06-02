import Screen from '../images/screen.png'


const Step_1 = () => {


    return (
        <div className='w-[90%] m-auto'>
            <div className=''>
                <div className='text-white text-center lg:mt-20'>
                    <p className='flex justify-center text-blue-500'>STEP 1</p>
                    <h2 className='flex justify-center lg:text-[50px] pho:text-[30px]  text-white 2xl:text-[75px] font-semibold'>Connect
                        Your Content</h2>
                    <div className='flex justify-center'><p className='w-[440px] text-slate-400'>Bring all of your
                        content together and get a Homepage that
                        automatically updates whenever you create anywhere online.</p></div>
                </div>
                <div className='flex justify-center my-4'>
                    <button
                        className='border border-slate-500 rounded-lg text-slate-400 px-4 py-2 hover:text-white duration-200 hover:shadow-white hover:shadow-sm'>View
                        Avaliable Sources
                    </button>
                </div>


                <div className='flex lg:mt-[100px]'>
                    <div className='text-white'>
                        <p className='font-semibold mt-4 pho:flex justify-center pho:my-4 lg:block'>Your Homepage</p>
                        <div data-aos="fade-down" className='flex justify-center'>
                            <img  className=' w-full  pho:block lg:hidden' src={Screen} alt=""/>
                        </div>
                        <div data-aos="fade-down" className='pho:flex flex-wrap pho:justify-center lg:block'>
                            <h3 className='lg:text-[50px] font-semibold lg:w-[450px] pho:text-[30px] lg:mt-20 '>Your
                                Content.</h3>
                            <h3 className='lg:text-[50px] font-semibold pho:text-[30px]'> All in <span
                                className='text-blue-500'>One Spot</span></h3>
                        </div>
                        <div data-aos="fade-down" className='flex   pho:justify-center lg:justify-start items-center gap-2 mt-10'><p
                            className='bg-slate-800 w-[26px] flex justify-center rounded-[13px] my-2 '>1</p> <p>Bring
                            all of your content together into one homepage.</p></div>
                        <div data-aos="fade-down" className='flex pho:justify-center lg:justify-start items-center  gap-2'><p
                            className='bg-slate-800 px-2 rounded-[13px] my-2 '>2</p> <p>Your page automatically updates
                            whenever you create.</p></div>
                        <div className='flex pho:justify-center lg:justify-start gap-4 my-8'>
                            <button className='bg-blue-600 h-10 px-3 rounded-lg duration-200 hover:bg-blue-700'>Get
                                Started Now
                            </button>
                            <button
                                className='border border-slate-500 rounded-lg text-slate-400 px-4 py-2 hover:text-white duration-200 hover:shadow-white hover:shadow-sm'>View
                                A Demo
                            </button>
                        </div>
                    </div>
                    <div className='pho:hidden lg:block'>
                        <img data-aos="fade-down" className='' src={Screen} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Step_1