import "react-multi-carousel/lib/styles.css";
import logo1 from "../assets/logo/1.png";
import logo2 from "../assets/logo/2.png";
import logo3 from "../assets/logo/3.png";
import logo4 from "../assets/logo/4.png";
import logo5 from "../assets/logo/5.png";
import logo6 from "../assets/logo/6.png";
import logo1Plus from "../assets/logo/1+.png";
import logo2Plus from "../assets/logo/2+.png";
import logo3Plus from "../assets/logo/3+.png";
import logo4Plus from "../assets/logo/4+.png";
import logo5Plus from "../assets/logo/5+.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { useState } from 'react'


export default function Category() {
  return (
    <div>
      <h1 className="flex font-sans font-bold justify-center text-3xl">
        Choose a category
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-6 justify-center gap-3 mx-auto p-8">
        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://i.pinimg.com/736x/0d/88/26/0d8826e477ac7d55f96a5c1a6165bd1b.jpg"
          />
          <h2 className="relative font-bold text-3xl text-white">
            Solo Travel
          </h2>
        </div>

        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://i.pinimg.com/736x/9d/80/0f/9d800f4353018e02d8310d057830ebc5.jpg"
          />
          <h2 className="relative z-10 font-bold text-3xl text-white">
            Mount Travel
          </h2>
        </div>

        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://i.pinimg.com/enabled_lo_mid/736x/0a/7f/1d/0a7f1db37c3dfa52ce24f077f61a8de6.jpg"
          />
          <h2 className="relative z-10 font-bold text-3xl text-white">
            Jungle Travel
          </h2>
        </div>

        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://i.pinimg.com/enabled_lo_mid/736x/cf/7a/36/cf7a36857429dc03d225035febe17470.jpg"
          />
          <h2 className="relative z-10 font-bold text-3xl text-white">
            Road Travel
          </h2>
        </div>

        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://i.pinimg.com/736x/ca/e6/40/cae64054a6e25473654228d0a8c2eb0b.jpg"
          />
          <h2 className="relative z-10 font-bold text-3xl text-white">
            Osean Travel
          </h2>
        </div>

        <div className="bg-blue-600 flex-1 rounded-lg relative text-center min-h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://i.pinimg.com/736x/18/17/dc/1817dc7f0a63efd25ee11b92f241c85b.jpg"
          />
          <h2 className="relative z-10 font-bold text-3xl text-white">
            Old City Travel
          </h2>
        </div>
      </div>

      <br />
      <h1 className="flex font-sans font-bold justify-center text-3xl">
        Features Explore
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4 mx-auto p-8">
        <div className='relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
            <img 
                className="w-full h-48 object-cover" 
                src={logo1} 
                alt="Golden Sands"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">The Golden Sands of Florida and California</h2>
                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, con turadip
                    iscingelit. In sed et donec purus viverra. Sit
                    justo velit, eu sed
                </p>
                <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-blue-600 mr-2">Solo Travel</span>
                    <span>by Adam Smith</span>
                </div>
            </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src={logo2}
            alt="Golden Sands"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              The Golden Sands of Florida and California
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et
              donec purus viverra. Sit justo velit, eu sed
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium text-yellow-600 mr-2">
                Solo Travel
              </span>
              <span>by Adam Smith</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src={logo3}
            alt="Golden Sands"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              The Golden Sands of Florida and California
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et
              donec purus viverra. Sit justo velit, eu sed
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium text-yellow-600 mr-2">
                Solo Travel
              </span>
              <span>by Adam Smith</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src={logo4}
            alt="Golden Sands"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              The Golden Sands of Florida and California
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et
              donec purus viverra. Sit justo velit, eu sed
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium text-yellow-600 mr-2">
                Solo Travel
              </span>
              <span>by Adam Smith</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src={logo5}
            alt="Golden Sands"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              The Golden Sands of Florida and California
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et
              donec purus viverra. Sit justo velit, eu sed
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium text-yellow-600 mr-2">
                Solo Travel
              </span>
              <span>by Adam Smith</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src={logo6}
            alt="Golden Sands"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              The Golden Sands of Florida and California
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et
              donec purus viverra. Sit justo velit, eu sed
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium text-yellow-600 mr-2">
                Solo Travel
              </span>
              <span>by Adam Smith</span>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h1 className="flex font-sans font-bold justify-center text-3xl">Features Explore</h1>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Blog Posts Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Blog Post Item 1 */}
              <div className="flex flex-col md:flex-row gap-8 border-b pb-8 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={logo1Plus}
                    alt="Travel Blog"
                  />
                </div>
                <div className="md:w-1/2 p-2">
                  <h2 className="text-2xl font-bold mb-3 hover:text-orange-500 transition-colors">
                    13 Things I'd Tell Any New Traveler
                  </h2>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="text-orange-500">Post</span>
                    <span>By</span>
                    <span className="text-gray-600 hover:text-orange-500">Adam Smith</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>10 Nov, 2020</span>
                    <span>50 comments</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
                    donec purus viverra. Sit justo velit, eu sed sollicitudin tempus...
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 transition-colors">
                    READ MORE...
                  </button>
                </div>
              </div>

              {/* Blog Post Item 2 */}
              <div className="flex flex-col md:flex-row gap-8 border-b pb-8 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={logo2Plus}
                    alt="Travel Blog"
                  />
                </div>
                <div className="md:w-1/2 p-2">
                  <h2 className="text-2xl font-bold mb-3 hover:text-orange-500 transition-colors">
                    13 Things I'd Tell Any New Traveler
                  </h2>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="text-orange-500">Post</span>
                    <span>By</span>
                    <span className="text-gray-600 hover:text-orange-500">Adam Smith</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>10 Nov, 2020</span>
                    <span>50 comments</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
                    donec purus viverra. Sit justo velit, eu sed sollicitudin tempus...
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 transition-colors">
                    READ MORE...
                  </button>
                </div>
              </div>

              {/* Blog Post Item 3 */}
              <div className="flex flex-col md:flex-row gap-8 border-b pb-8 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={logo3Plus}
                    alt="Travel Blog"
                  />
                </div>
                <div className="md:w-1/2 p-2">
                  <h2 className="text-2xl font-bold mb-3 hover:text-orange-500 transition-colors">
                    13 Things I'd Tell Any New Traveler
                  </h2>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="text-orange-500">Post</span>
                    <span>By</span>
                    <span className="text-gray-600 hover:text-orange-500">Adam Smith</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>10 Nov, 2020</span>
                    <span>50 comments</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
                    donec purus viverra. Sit justo velit, eu sed sollicitudin tempus...
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 transition-colors">
                    READ MORE...
                  </button>
                </div>
              </div>

              {/* Blog Post Item 4 */}
              <div className="flex flex-col md:flex-row gap-8 border-b pb-8 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={logo4Plus}
                    alt="Travel Blog"
                  />
                </div>
                <div className="md:w-1/2 p-2">
                  <h2 className="text-2xl font-bold mb-3 hover:text-orange-500 transition-colors">
                    13 Things I'd Tell Any New Traveler
                  </h2>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="text-orange-500">Post</span>
                    <span>By</span>
                    <span className="text-gray-600 hover:text-orange-500">Adam Smith</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>10 Nov, 2020</span>
                    <span>50 comments</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
                    donec purus viverra. Sit justo velit, eu sed sollicitudin tempus...
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 transition-colors">
                    READ MORE...
                  </button>
                </div>
              </div>

                            {/* Blog Post Item 5 */}
              <div className="flex flex-col md:flex-row gap-8 border-b pb-8 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={logo5Plus}
                    alt="Travel Blog"
                  />
                </div>
                <div className="md:w-1/2 p-2">
                  <h2 className="text-2xl font-bold mb-3 hover:text-orange-500 transition-colors">
                    13 Things I'd Tell Any New Traveler
                  </h2>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="text-orange-500">Post</span>
                    <span>By</span>
                    <span className="text-gray-600 hover:text-orange-500">Adam Smith</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>10 Nov, 2020</span>
                    <span>50 comments</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
                    donec purus viverra. Sit justo velit, eu sed sollicitudin tempus...
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 transition-colors">
                    READ MORE...
                  </button>
                </div>
              </div>

              {/* Add more blog post items as needed */}
            </div>

            {/* Popular Posts Column */}
            <div className="lg:col-span-4 space-y-4"><h2 className="font-bold text-xl mt-4 text-center">Popular Post</h2>
              {/* Popular Post Item 1*/}
              <div className="flex gap-4 items-center">
              
                <img
                  className="w-20 h-20 object-cover rounded"
                  src={logo1Plus}
                  alt="Popular post"
                />
                <div>
                  <h3 className="font-semibold">13 Things I'd Tell Any New Traveler</h3>
                  <p className="text-sm text-gray-500">By Adam Smith</p>
                </div>
                </div>

                {/* Popular Post Item 2*/}
                <div className="flex gap-4 items-center">  
                    <img
                      className="w-20 h-20 object-cover rounded"
                      src={logo2Plus}
                      alt="Popular post"
                    />
                    <div>
                      <h3 className="font-semibold">13 Things I'd Tell Any New Traveler</h3>
                      <p className="text-sm text-gray-500">By Adam Smith</p>
                    </div>
                </div>
             
                {/* Popular Post Item 3*/}
                <div className="flex gap-4 items-center">  
                    <img
                      className="w-20 h-20 object-cover rounded"
                      src={logo3Plus}
                      alt="Popular post"
                    />
                    <div>
                      <h3 className="font-semibold">13 Things I'd Tell Any New Traveler</h3>
                      <p className="text-sm text-gray-500">By Adam Smith</p>
                    </div>
                </div>

                {/* Popular Post Item 4*/}
                <div className="flex gap-4 items-center">  
                    <img
                      className="w-20 h-20 object-cover rounded"
                      src={logo4Plus}
                      alt="Popular post"
                    />
                    <div>
                      <h3 className="font-semibold">13 Things I'd Tell Any New Traveler</h3>
                      <p className="text-sm text-gray-500">By Adam Smith</p>
                    </div>
                </div>

                {/* Popular Post Item 5*/}
                <div className="flex gap-4 items-center">  
                    <img
                      className="w-20 h-20 object-cover rounded"
                      src={logo5Plus}
                      alt="Popular post"
                    />
                    <div>
                      <h3 className="font-semibold">13 Things I'd Tell Any New Traveler</h3>
                      <p className="text-sm text-gray-500">By Adam Smith</p>
                    </div>
                </div>
              
              {/* Subscribe Section */}
              <div className="bg-orange-500 text-white p-6 rounded-lg mt-8">
                <h3 className="font-bold text-xl mb-4">Subscribe Today</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-2 rounded text-black"
                />
                <button className="w-full bg-white text-orange-500 py-2 rounded font-semibold">
                  SUBSCRIBE
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center mb-8 p-8">
        <h1 className="flex font-sans font-bold justify-center text-3xl">Follow Me Instagram</h1>
        <p className="text-yellow-600 text-2xl">@designhunterrbd</p>
        
        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full">
          <div className="overflow-hidden rounded">
            <img 
              src="https://i.pinimg.com/736x/0d/88/26/0d8826e477ac7d55f96a5c1a6165bd1b.jpg"
              alt="Instagram post"
              className="w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img 
              src="https://i.pinimg.com/736x/9d/80/0f/9d800f4353018e02d8310d057830ebc5.jpg"
              alt="Instagram post"
              className="w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img 
              src="https://i.pinimg.com/enabled_lo_mid/736x/0a/7f/1d/0a7f1db37c3dfa52ce24f077f61a8de6.jpg"
              alt="Instagram post"
              className="w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img 
              src="https://i.pinimg.com/enabled_lo_mid/736x/cf/7a/36/cf7a36857429dc03d225035febe17470.jpg"
              alt="Instagram post"
              className="w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img 
              src="https://i.pinimg.com/736x/ca/e6/40/cae64054a6e25473654228d0a8c2eb0b.jpg"
              alt="Instagram post"
              className="w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded">
            <img 
              src="https://i.pinimg.com/736x/18/17/dc/1817dc7f0a63efd25ee11b92f241c85b.jpg"
              alt="Instagram post"
              className="w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-orange-500 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2024 cornerstone All Right Reserved</p>
            </div>
            
            <div className="flex space-x-8">
              <a href="/contact" className="hover:text-gray-200">Contact</a>
              <a href="/privacy" className="hover:text-gray-200">Privacy</a>
              <a href="/terms" className="hover:text-gray-200">Terms</a>
              <a href="/about" className="hover:text-gray-200">About</a>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className='text-white hover:text-yellow-500 transform hover:scale-125 transition-all'><FaFacebook size={24} /></a>
            <a href="#" className='text-white hover:text-yellow-500 transform hover:scale-125 transition-all'><FaTwitter size={24} /></a>
            <a href="#" className='text-white hover:text-yellow-500 transform hover:scale-125 transition-all'><AiFillInstagram size={24} /></a>
            <a href="#" className='text-white hover:text-yellow-500 transform hover:scale-125 transition-all'><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
