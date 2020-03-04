// src/App.js
import React from 'react';
import flowers from './images/flowers.png';

function App() {
  return (
    <div
      className="h-screen w-full bg-white"
      style={{
        backgroundImage: `
        linear-gradient(to bottom, rgba(253, 252, 252, 1), rgba(253,252,252, 0.7)),
        url(${flowers})
        `,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
      }}
>
      <h1 className="font-display font-bold text-6xl mb-2 leading-tight px-5 pt-10 text-brown-200">
        Music Bookclub
      </h1>
      <form className="pl-5 pr-12 absolute bottom-0 mb-32 w-full">
        <div className="mb-4">
          <label className="font-display block text-gray-700 text-lg font-bold text-brown-200" htmlFor="username">
            Name
          </label>
          <input
            className="appearance-none border border-black rounded w-full py-2 px-3 leading-tight bg-white"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-brown-200" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border border-black rounded w-full py-2 px-3 leading-tight"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
