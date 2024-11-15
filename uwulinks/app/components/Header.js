import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col w-full bg-red-500 rounded-2xl m-2">
                <div className="flex flex-row justify-evenly">
                    <h1>UwU Links</h1>
                    <FaXTwitter />
                </div>
                <div className="flex justify-between items-center space-x-4 ">

                <a>classement</a>
                <Link href="/login">Connexion</Link>
                <button className="bg-violet-400 text-white rounded-2xl p-2">
                    S'inscrire
                </button>
                </div>
            </div>
        </div>
    );
}