import Image from "next/image";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import { FaCaretRight  } from "react-icons/fa";
const handleClick = () => {
  console.log("clicked");
}
export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center my-10">
        <a className="text-xl font-bold">UwULinks</a>
        <div className="flex flex-col  text-center mt-4">
        <a>All your links on one page, </a>
        <a className="font-bold border-solid border-b-2 border-violet-500 mx-32">free forever !</a>
        </div>
      </div>
      <div>
        <div className="flex flex-row h-12 justify-center">
          <div className="flex flex-row bg-gray-900 border-2 border-solid border-violet-500 w-48 p-3 rounded-2xl items-center">
            <a>uwulinks.lol/</a>
            <input 
              type="text" 
              className="bg-transparent ml-0.5 -mr-3 -mt-3 -mb-3 rounded-r-2xl outline-none custom-input"
              placeholder="username" />
          </div>
          <button 
            className="flex flex-row bg-gradient-to-l from-violet-600 to-indigo-800 p-3 rounded-2xl ml-2 items-center text-center"
          >
            Claim  <FaCaretRight />
          </button>
        </div>
      </div>
      <Stats />
    </div>
  );
}
