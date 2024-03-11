import phone from '../images/Mobile.png'


const Step_2 = () => {


    return (
        <div className='my-10 w-[90%] m-auto'>
            <div>
                <h4 className='flex justify-center text-blue-400 '>STEP 2</h4>
                <h2 className='flex justify-center 2xl:text-[75px] lg:text-[50px] text-white sm:text-[40px] pho:text-[30px] font-semibold'>Share
                    Your Homepage</h2>
                <div className='flex justify-center text-center'><p className='w-[600px] text-slate-400'>Share your Wavium homepage
                    link with your followers, and
                    we'll handle the rest.</p></div>
            </div>

            <div className='grid grid-cols-2 relative my-10  gap-4'>
                <div className='text-white bg-slate-900 pl-[30px] md:py-4 pho:py-2'>
                    <p className='text-green-500'>One Link</p>
                    <h2 className='lg:text-[50px] font-bold text-slate-400'>ALL You Create.</h2>
                    <h2 className='lg:text-[50px] font-bold'>One Link</h2>
                    <img className='pt-4' src={phone} alt=""/>
                </div>

                <div className='text-white bg-slate-900 pl-[30px] py-4'>
                    <p className='text-green-500'>Collect Subscribers</p>
                    <h2 className='lg:text-[50px] font-bold text-slate-400'>Emails.</h2>
                    <h2 className='lg:text-[50px] font-bold text-slate-400'>Phone #s.</h2>
                    <h2 className='lg:text-[50px] font-bold'>All Yours.</h2>
                </div>
            </div>
        </div>
    )
}

export default Step_2