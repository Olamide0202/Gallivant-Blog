import Hero from "../component/Hero"
import Category from "../component/Category"

export default function Home() {
  return (
    <div className='bg-primary min-h-screen space-y-10'>
     <Hero />
     <Category />
   </div>
  )
}
