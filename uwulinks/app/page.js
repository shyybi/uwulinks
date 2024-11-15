import Image from "next/image";
import Header from "@/components/Header";
const handleClick = () => {
  console.log("clicked");
}
export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <a>UwULinks</a>
        <a>Tout vos liens sur une seule page, gratuit pour toujours !</a>
      </div>
      <div>
        <a>Pick a link</a>
        <div className="flex flex-row">
          <div className="flex flex-row bg-violet-400 w-fit p-3 rounded-2xl">
            <a>uwulinks.lol/</a>
            <input 
              type="text" 
              className="bg-transparent ml-1 -mr-3 -mt-3 -mb-3 rounded-r-2xl outline-none"
              placeholder="username" />
          </div>
        </div>
      </div>
    </div>
  );
}
