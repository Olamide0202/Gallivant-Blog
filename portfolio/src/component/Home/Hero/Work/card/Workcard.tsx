
export default function Workcard({image}:{image:string}) {
  return (
    <div className='space-y-4 mx-auto'>
        <img src={image} alt="" />
        <h1 className='font-bold text-2xl'>Branding</h1>
        <p className='text-lg'>UI, Art drection</p>
    </div>
  )
}
