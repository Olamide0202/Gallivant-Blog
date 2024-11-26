export default function Footer() {
  return (
    <div className='bg-white px-8 py-12 '>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-8  mx-auto'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Lets work together</h1>
          <p className='text-gray-600 max-w-md'>
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <div className='flex space-x-4 pt-4'>
            <a href="#" className='hover:opacity-80'><img src="/discord.svg" alt="Discord" /></a>
            <a href="#" className='hover:opacity-80'><img src="/facebook.svg" alt="Facebook" /></a>
            <a href="#" className='hover:opacity-80'><img src="/dribbble.svg" alt="Dribbble" /></a>
            <a href="#" className='hover:opacity-80'><img src="/instagram.svg" alt="Instagram" /></a>
            <a href="#" className='hover:opacity-80'><img src="/behance.svg" alt="Behance" /></a>
          </div>
        </div>

        <div className='flex flex-col space-y-4'>
          <input 
            type="text" 
            placeholder="Name"
            className='p-3 bg-gray-100 rounded-md'
          />
          <input 
            type="email" 
            placeholder="Email"
            className='p-3 bg-gray-100 rounded-md'
          />
          <button className='bg-black w-1/4 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
