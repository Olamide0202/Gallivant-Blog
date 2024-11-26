import Heroimg from '../../../assets/img/Heroimg.png'

export default function Hero() {
  return (
    <div className='bg-white grid md:grid-cols-2 grid-cols-1  gap-5 md:py-10 py-5 md:px-20 px-4'>
        <div className='text-primary space-y-4 flex flex-col justify-center'>
            <h1 className='font-bold text-lg'> Branding | Image making </h1>
            <h1 className='font-bold text-5xl'>Visual Designer</h1>
            <p className='text-lg'>This is a template Figma file, turned into code using Anima. 
            Learn more at AnimaApp.com</p>

            <button className='bg-secondary text-white px-8 py-4 w-fit'>Contact</button>

        </div>

            {/* image */}
        <div className='flex justify-center items-center'>
            <img src={Heroimg} alt="" />
        </div>
    </div>
  )
}
