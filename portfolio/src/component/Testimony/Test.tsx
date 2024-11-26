import Textcard from "./Testimony-card/Textcard"
export default function Test() {
  return (
    <div className='bg-white p-10 space-y-10'>
        <h1 className='text-primary font-bold text-3xl text-center'>Testimonial</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
            <Textcard />
            <Textcard />
            <Textcard />
            <Textcard />
            <Textcard />
            <Textcard />
        </div>
    </div>
  )
}
