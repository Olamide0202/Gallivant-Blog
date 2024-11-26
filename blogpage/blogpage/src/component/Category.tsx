import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Category() {
  return (
    <div>
      <h1 className="flex font-sans font-bold justify-center text-3xl">
        Choose a category
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-6 justify-center gap-3 mx-auto p-5">

        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30">
          </div>
            <img className="absolute inset-0 w-full h-full object-cover" src="https://i.pinimg.com/736x/0d/88/26/0d8826e477ac7d55f96a5c1a6165bd1b.jpg" />
            <h2 className="relative z-10 font-bold text-3xl text-white">Solo Travel</h2>
        </div>
        
        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30">
          </div>
            <img className="absolute inset-0 w-full h-full object-cover" src="https://i.pinimg.com/736x/9d/80/0f/9d800f4353018e02d8310d057830ebc5.jpg" />
            <h2 className="relative z-10 font-bold text-3xl text-white">Mount Travel</h2>
        </div>
        
        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30">
          </div>
            <img className="absolute inset-0 w-full h-full object-cover" src="https://i.pinimg.com/enabled_lo_mid/736x/0a/7f/1d/0a7f1db37c3dfa52ce24f077f61a8de6.jpg" />
            <h2 className="relative z-10 font-bold text-3xl text-white">Jungle Travel</h2>
        </div>
        
        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30">
          </div>
            <img className="absolute inset-0 w-full h-full object-cover" src="https://i.pinimg.com/enabled_lo_mid/736x/cf/7a/36/cf7a36857429dc03d225035febe17470.jpg" />
            <h2 className="relative z-10 font-bold text-3xl text-white">Road Travel</h2>
        </div>
        
        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30">
          </div>
            <img className="absolute inset-0 w-full h-full object-cover" src="https://i.pinimg.com/736x/ca/e6/40/cae64054a6e25473654228d0a8c2eb0b.jpg" />
            <h2 className="relative z-10 font-bold text-3xl text-white">Osean Travel</h2>
        </div>
        
        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30">
          </div>
            <img className="absolute inset-0 w-full h-full object-cover" src="https://i.pinimg.com/736x/18/17/dc/1817dc7f0a63efd25ee11b92f241c85b.jpg" />
            <h2 className="relative z-10 font-bold text-3xl text-white">Old City Travel</h2>
        </div>

        
      </div>
    </div>
  );
}
