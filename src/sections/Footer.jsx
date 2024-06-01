import Logo from '../images/logo.png'
import dot from '../images/Dot.png'

const Footer = () => {


    return (
        <div className='w-[90%] m-auto'>
            <div>
                <div className='flex justify-center mt-[50px] mb-2 '>
                    <img data-aos="fade-down" className='sm:w-[100px] pho:w-[70px]' src={Logo} alt=""/>

                </div>
                <h3 data-aos="fade-up" className='flex justify-center text-white font-bold pho:text-[30px] sm:text-[40px] lg:text-[50px] 2xl:text-[100px]'>Get
                    Started Now</h3>
                <p className='flex justify-center text-slate-200'>Setup is easy and takes under 5 minutes.</p>
                <div className='flex justify-center my-4'>
                    <button className=' px-4 py-2 bg-blue-500 text-white rounded-lg duration-200 hover:bg-blue-600 '>Get
                        Started Now
                    </button>

                </div>
                <div className='flex justify-center gap-2'>
                    <img src={dot} alt=""/>
                    <p className='text-white'>1000+ <span
                        className='text-slate-400'>creators have already started</span></p>
                </div>


                <div className=' justify-between flex '>
                    <div className='my-8'>
                        <div className='flex gap-1 items-center'><img className='pho:w-8 sm:w-auto' src={Logo} alt=""/>
                            <h5 className='text-white font-bold text-[25px]'>Marico</h5>
                        </div>
                        <p className='text-slate-400'>info@marico.co</p>
                    </div>
                    <div className='text-slate-400 flex  sm:gap-4 pho:gap-2 items-center'>
                        <p className='hover:text-blue-400 cursor-pointer duration-200'>About</p>
                        <p className='text-blue-400 cursor-pointer'>Pricing</p>
                        <p className='hover:text-blue-400 cursor-pointer duration-200'>Blog</p>
                        <p className='hover:text-blue-400 cursor-pointer duration-200'>Sign in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer