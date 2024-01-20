import axios from "axios";
import { useState } from "react";

function IdeaCard() {
    const [advice, setAdvice] = useState({id: 117, advice: "It's easy to sit up and take notice, what's difficult is getting up and taking action"});
    function handleButtonClick () {
        getAdvice();
    }
    const getAdvice = async () => {
        const response = await axios.get("https://api.adviceslip.com/advice");
        const newAdvice = {id: response.data.slip.id, advice: response.data.slip.advice}
        setAdvice(prevAdvice => (prevAdvice, newAdvice));
    }

  return (
    <>
    <main className='h-screen  flex items-center justify-center w-full mx-auto max-w-[600px]'>
      <div className="rounded-lg shadow-lg shadow-brand-blue-400 relative bg-brand-blue-300 text-white text-center text-[28px]  sm:max-w-[85%] font-extrabold p-4 md:p-6 lg:p-8">
        <h1 className='text-brand-green-400 text-base tracking-[0.3em] uppercase mt-6 md:mt-7 mb-4 md:mb-6 font-normal'>Advice #{advice.id}</h1>
        <p className=' text-balance'>" {advice.advice}. "</p>
        <img src="/assets/pattern_divider_desktop.svg" alt="pattern divider" className='mx-auto mt-5 md:mt-6 mb-12'/>
        <button onClick={handleButtonClick} className='hover:shadow-brand-green-400 hover:shadow-3xl absolute -bottom-[7%] left-1/2 -translate-x-1/2 rounded-full p-4 bg-brand-green-400'><img src="/assets/icon_dice.svg" alt="dice icon" /></button>
      </div>
    </main>
    </>
  )
}

export default IdeaCard;
