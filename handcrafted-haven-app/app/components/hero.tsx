export default function Hero(){
    return (
        <div 
        style={{
            backgroundImage: "url('/DALL·E 2025-01-24 06.02.41 - A beautiful, handcrafted wooden sculpture of a tree, with intricate details on the bark and branches, showcasing natural textures and patterns. The sc.webp  ')", // Background image for the page.
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
          className="flex flex-col">
         <div className="flex flex-col items-center justify-center flex-grow p-8">
          <h1 className="text-center text-3xl font-bold text-white mb-8">
            Welcome to Handcrafted Haven!
          </h1>
    
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl">
            {/* Work 1 */}
            <div className="p-6 text-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
              <p className="text-white mt-2">
                war creativiteit tot leven komt
              </p>
            </div>
    
            {/* Work 2 */}
            <div className="p-6 text-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
              <p className="text-white mt-2">
                discover the beauty of handcrafted art, made with love and creativity
              </p>
            </div>
    
            {/* Work 3 */}
            <div className="p-6 text-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
              <p className="text-white mt-2">
                Hecho para Ti, No lo dudes
              </p>
            </div>
          </div>
    
          {/* Explore Button with Light Background */}
          <div className="mt-8">
            <button
              className="text-4xl font-bold text-black bg-white bg-opacity-70 hover:bg-opacity-100 px-8 py-4 rounded-lg shadow-md transition duration-300"
            >
              Explore
            </button>
          </div>
         </div>
        </div>
      );
}