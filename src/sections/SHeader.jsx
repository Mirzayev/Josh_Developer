import Logo1 from '../images/logo.png'
import light from '../images/Dot.png'
import {useState} from "react";
import SignUp from "./SignUp.jsx";

const SHeader = () => {

    const [showSignUp, setShowSignUp] = useState(false)

    const ShowSignUp = () => {
        setShowSignUp(true)
    }
    return (
        <div className='relative w-[90%] m-auto'>
            <div className='flex justify-between pho:mt-8'>
                <div className='flex items-center text-white font-sans text-3xl font-semibold gap-4'>
                    <img src={Logo1} alt=""/>
                    <p>Marico</p>
                </div>
                {showSignUp && <SignUp setShowSignUp={setShowSignUp}/>}

                <div className='md:flex items-center gap-5 text-white pho:hidden '>
                    <div className=''>
                        <div className='flex gap-2 text-white items-center'>
                            <p>Use Cases</p>
                            <i className="fa-solid fa-chevron-down text-sm "></i>
                        </div>
                        <div className='hidden'>
                            <p>Use Cases</p>
                            <p>Use Cases</p>
                            <p>Use Cases</p>
                        </div>
                    </div>
                    <p className='cursor-pointer hover:text-blue-300 duration-200'>About</p>
                    <p className='cursor-pointer hover:text-blue-300 duration-200'>Pricing</p>
                    <p className='cursor-pointer hover:text-blue-300 duration-200'>Blog</p>
                </div>

                <div className='flex gap-4 text-white items-center '>
                    <button className='duration-200  hover:text-blue-300 pho:hidden sm:block'>Login</button>
                    <button onClick={() => ShowSignUp()}
                            className='bg-blue-600 h-10 px-3 rounded-lg duration-200 hover:bg-blue-700'>Sign up
                    </button>

                    <i className="fa-solid fa-bars text-white pho:block md:hidden text-xl"></i>

                </div>

            </div>

            <div className='lg:leading-[100px] text-center'>
                <h1 className='mt-10 flex justify-center text-white lg:text-[90px] md:text-[70px]   sm:text-[60px] font-bold pho:text-[35px]'>Own
                    your audience.</h1>
                <h1 className='flex justify-center  lg:text-[90px] md:text-[70px] sm:text-[60px] font-bold text-red-400 pho:text-[35px]'>So
                    you don't lose them</h1>
            </div>

            <div className='flex justify-center my-10 text-center'>
                <p className=' text-white lg:text-[30px] w-[460px] pho:text-[20px] md:text-[25px]'>Turn your audience
                    into email and
                    text message subscribers.</p>

            </div>

            <div className='flex justify-center gap-4 items-center'>
                <button
                    className='flex justify-center bg-blue-600 px-4 py-2 duration-200 rounded-lg text-white hover:bg-blue-700'>Get
                    Started Now
                </button>
                <button
                    className='flex justify-center border-2 border-slate-500 text-slate-500 rounded-lg px-4 py-2 duration-200 hover:bg-slate-800 hover:text-white hover:shadow-white shadow-sm '>View
                    A Demo
                </button>
            </div>

            <div className='flex justify-center gap-1 my-4'>
                <img src={light} alt=""/>
                <p className='text-white'>1000+</p>
                <p className='text-slate-700'>creators have already started</p>
            </div>
        </div>
    )
}


export default SHeader