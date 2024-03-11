import {useState} from "react";


const SignUp = ({ setShowSignUp }) => {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    // const [open , close]  = useState(true)

    const SendData = () => {
        setFirstName('')
        setLastName('')
        setAge('')
        setEmail('')
    }

    return (
        <div className='absolute lg:top-[-20px] left-[40%]  h-screen filter '>
            <div className='flex  items-center h-screen'>
                <div
                    className='relative text-center items-center bg-black px-[60px] py-[90px] rounded-xl border-2 backdrop-opacity-[.15]'>
                    <i onClick={() => setShowSignUp(false)}
                       className="absolute fa-solid fa-circle-xmark text-slate-100 top-2 right-2 text-xl cursor-pointer "></i>
                    <h2 className='flex justify-center text-lime-300 font-mono text-xl shadow-md shadow-white py-2'>Sign
                        Up </h2>
                    <input
                        className='bg-transparent border-2 text-white placeholder:text-white my-3 py-1 px-2 rounded-2xl outline-0 shadow-sm shadow-white '
                        type="text" placeholder='Enter you firstname'
                        onChange={(e) => setFirstName(e.target.value)}/><br/>
                    <p className=''>{setFirstName}</p>
                    <input
                        className='bg-transparent border-2 text-white placeholder:text-white my-3 py-1 px-2 rounded-2xl outline-0 shadow-sm shadow-white '
                        type="text" placeholder='Enter you lastname '
                        onChange={(e) => setLastName(e.target.value)}/><br/>
                    <input
                        className='bg-transparent border-2 text-white placeholder:text-white my-3 py-1 px-2 rounded-2xl outline-0 shadow-sm shadow-white '
                        type="number" placeholder='Enter you age' onChange={(e) => setAge(e.target.value)}/><br/>
                    <input
                        className='bg-transparent border-2 text-white placeholder:text-white my-3 py-1 px-2 rounded-2xl outline-0 shadow-sm shadow-white '
                        type="email" placeholder='Enter you email' onChange={(e) => setEmail(e.target.value)}/><br/>
                    <button onClick={SendData} type='button'
                            className='bg-lime-500  px-4 py-2 rounded-lg text-white border-2  duration-300 hover:bg-lime-600 my-2'>Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SignUp