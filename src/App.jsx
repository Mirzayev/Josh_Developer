import SHeader from "./sections/header/SHeader.jsx";
import WhyMarico from "./sections/WhyMarico.jsx";
import Step_1 from "./sections/Step_1.jsx";
import Step_2 from "./sections/Step_2.jsx";
import Step_3 from "./sections/Step_3.jsx";
import ExpAgree from "./sections/ExpAgree.jsx";
import Humans from "./sections/Humans.jsx";
import Footer from "./sections/Footer.jsx";

function App() {

  return (
      <div className='flex justify-center'>
    <div className='bg-black max-w-[1940px] w-full'>
      <SHeader/>
      <WhyMarico/>
      <Step_1/>
      <Step_2/>
      <Step_3/>
      <ExpAgree/>
      <Humans/>
      <Footer/>
    </div>
      </div>
  )
}

export default App
