export default function Feature(){
    return(
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-12 lg:mb-16">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <i className="fas fa-shipping-fast text-4xl text-gray-700 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900">Next day as standard</h3>
            <p className="mt-2 text-sm lg:text-base text-gray-600">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
      
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <i className="fas fa-check-circle text-4xl text-gray-700 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900">Made by true artisans</h3>
            <p className="mt-2 text-sm lg:text-base text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
      
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <i className="fas fa-tags text-4xl text-gray-700 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900">Unbeatable prices</h3>
            <p className="mt-2 text-sm lg:text-base text-gray-600">
              For our materials and quality you won't find better prices anywhere
            </p>
          </div>
      
          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <i className="fas fa-recycle text-4xl text-gray-700 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900">Recycled packaging</h3>
            <p className="mt-2 text-sm lg:text-base text-gray-600">
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
);}    