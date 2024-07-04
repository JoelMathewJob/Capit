import React from 'react'

function explore() {
  return (
    <div className='flex items-center justify-center '>

      <div className="flex flex-wrap p-5 -m-1 lg :w-2/3 md:-m-2">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/500x300" />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/501x301" />
          </div>
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/600x360" />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/601x361" />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/502x302" />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/503x303" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default explore