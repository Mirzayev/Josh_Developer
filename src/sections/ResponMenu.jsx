import './header/header.css'




    export default function ResponMenu({showMenu}) {


    return (

        <div data-aos="fade-right" className="w-full z-50 absolute top-0 right-0 h-screen   header">
            <div className="relative bg-black w-full max-w-[200px] flex flex-col  py-20 rounded-xl ">
                <i onClick={() => showMenu(false)} className="fa-solid fa-xmark absolute text-white top-4 right-4 text-xl cursor-pointer hover:text-red-500 "></i>
                <h2 className="text-white px-4 my-2 duration-300  roundeed-lg  cursor-pointer hover:bg-slate-300 w-full py-1  hover:text-black ">Use Cases</h2>
                <h2 className="text-white px-4 my-2 duration-300  roundeed-lg  cursor-pointer hover:bg-slate-300 w-full py-1  hover:text-black ">About</h2>
                <h2 className="text-white px-4 my-2 duration-300  roundeed-lg  cursor-pointer hover:bg-slate-300 w-full py-1  hover:text-black ">Prising</h2>
                <h2 className="text-white px-4 my-2 duration-300  roundeed-lg  cursor-pointer hover:bg-slate-300 w-full py-1  hover:text-black ">Blog</h2>
            </div>
        </div>
    )
    }