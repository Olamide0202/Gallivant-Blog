import ClientImage from "../../../assets/img/Client.png";
import { VscStarFull } from "react-icons/vsc";

export default function TextCard() {
  return (
    <div className='bg-[#F3F3F3] py-10 px-5 rounded-lg'>
      <div className="flex flex-col gap-4">
        <p className="text-gray-700">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        <div className="flex items-center gap-3">
          <img className="w-12 h-12 rounded-full" src={ClientImage} alt="Client" />
          <div>
            <h4 className="font-semibold">Gemma Nolen</h4>
            <h5 className="text-gray-600">Google</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
