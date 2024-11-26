import Workcard from './card/Workcard'
import Workimg1 from '../../../../assets/img/Work1.png'
import Workimg2 from '../../../../assets/img/Work2.png'
import Workimg3 from '../../../../assets/img/Work3.png'
import Workimg4 from '../../../../assets/img/Work4.png'
import Workimg5 from '../../../../assets/img/Work5.png'
import Workimg6 from '../../../../assets/img/Work6.png'

export default function Work() {
  return (
    <div className='bg-white p-10 space-y-10'>
        <h1 className='text-primary font-bold text-3xl text-center'>Latest Work</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            <Workcard image={Workimg1} />
            <Workcard image={Workimg2} />
            <Workcard image={Workimg3} />
            <Workcard image={Workimg4} />
            <Workcard image={Workimg5} />
            <Workcard image={Workimg6} />
        </div>
    </div>
  )
}
