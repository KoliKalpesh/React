import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox.jsx";

import Animation1 from "./components/Animation1.jsx";
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("inr")
  const [to,setTo]=useState("usd")
  const [convertedAmount,setConvertedAmount]=useState(0)


  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
    
  }

  const convert = ()=>{setConvertedAmount(amount * currencyInfo[to])}



  return (
    <>
      <div className="main flex h-screen w-screen bg-black">
        <div className=" h-full w-6/12 bg-white">
          <div className="text-green">
            <h1 className=" text-8xl font-semibold mx-20 my-20">money <br /> <span className=" text-green-400">convertor</span></h1>
          </div>
          <div className="animation ">
            <Animation1 />
          </div>
        </div>
        <div className=" h-full w-6/12 bg-red-300">
          <div className="text-white flex items-center justify-center h-full w-full">
          <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/4968636/pexels-photo-4968636.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(amount)=>setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                
                            />
                        </div>
                        <button onClick={convert} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
