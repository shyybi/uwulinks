import { LuEye } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { RiVipCrown2Line } from "react-icons/ri";
export default function Stats() {
    return (
        <div className="flex flex-col justify-center items-center mt-24 space-y-8">
            <div className="flex flex-row space-x-5">
                <div className="flex flex-col justify-center items-center border-solid border-violet-500 border-2 bg-slate-500 bg-opacity-45 px-4 py-2 rounded-md">
                    <a className="text-xl font-bold">10</a>
                    <div className="flex flex-row items-center space-x-1">
                        <LuEye />
                        <a>Views</a>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center border-solid border-violet-500 border-2 bg-slate-500 bg-opacity-45 px-4 py-2 rounded-md">
                    <a className="text-xl font-bold">10</a>
                    <div className="flex flex-row items-center space-x-1">
                        <FaUser />
                        <a>Users</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-5">
                <div className="flex flex-col justify-center items-center border-solid border-violet-500 border-2 bg-slate-500 bg-opacity-45 px-4 py-2 rounded-md">
                    <a className="text-xl font-bold">0</a>
                    <div className="flex flex-row items-center space-x-2">
                        <RiVipCrown2Line />
                        <a>Subs</a>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center border-solid border-violet-500 border-2 bg-slate-500 bg-opacity-45 px-4 py-2 rounded-md">
                    <a className="text-xl font-bold">10</a>
                    <div className="flex flex-row items-center space-x-1">
                        <FaUser />
                        <a>Users</a>
                    </div>
                </div>
            </div>
            <a className="">No subs ? Because it's free and forever.</a>
        </div>
    );
}