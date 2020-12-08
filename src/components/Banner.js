import React from 'react'

const Banner = () => {
  return (
    <div className="max-w-xl mx-auto flex p-6 bg-gray-100 mt-6 mb-6 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-indigo-400 leading-tight">
          Simple Entry Level Programmer Template
        </h1>
        <p className="text-base text-gray-500 leading-normal">
          check out the code on <a href="https://github.com/Mikey-Esteban/cv-project-app" className="text-black text-purple-500">github</a>
        </p>
      </div>
    </div>
  )
}

export default Banner
