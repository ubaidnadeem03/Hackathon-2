
 
 export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
          <div className="flex flex-col md:flex-row">
            <div className="bg-indigo-900 text-white p-8 md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-light mb-4">
                The furniture brand for the future, with timeless designs
              </h1>
              <button className="bg-gray-700 text-white py-2 px-4 rounded mt-4">
                View collection
              </button>
              <p className="mt-8 text-gray-300">
                A new era in eco-friendly furniture with Axelon, the French
                luxury retail brand with nice fonts, tasteful colors, and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </div>
            <div className="relative bg-teal-200 md:w-1/2 flex items-center justify-center p-8">
              <img
                alt="A modern black chair with wooden legs"
                className="max-w-full h-auto"
                height={400}
                src="https://storage.googleapis.com/a1aa/image/Jkt7uSfscLxLFScf2eL07i9NWRzQGqeOgkAyBLGtUJuOoNzPB.jpg"
                width={300}
              />
            </div>
          </div>
        </div>
</div>
</>

    )}