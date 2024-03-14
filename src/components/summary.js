import React from 'react';
import InputComponent from './input';
import OutputComponent from './output';

const SummariseComponent = ({ toggleDarkMode,darkMode}) => {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between px-4 pt-4 text-neutral-800 dark:text-cyan-50">
          <div className="flex justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
              <ellipse cx="32" cy="61" opacity=".3" rx="20.125" ry="3"></ellipse>
              <path fill="#37d0ee" d="M48,52H17c-2.209,0-4-1.791-4-4V8c0-2.209,1.791-4,4-4h21.311c1.06,0,2.077,0.421,2.827,1.17	l9.689,9.68C51.578,15.601,52,16.619,52,17.68V48C52,50.209,50.209,52,48,52z"></path>
              <path fill="#fff" d="M13,8v18c2.762,0,5-2.238,5-5V9.652c0-0.42,0.264-0.795,0.66-0.934 C20.605,8.033,22,6.18,22,4h-5C14.791,4,13,5.791,13,8z" opacity=".3"></path>
              <path d="M52,48V25c-2.762,0-5,2.238-5,5v16c0,0.552-0.448,1-1,1h-9c-2.762,0-5,2.238-5,5h16 C50.209,52,52,50.209,52,48z" opacity=".15"></path>
              <line x1="16.5" x2="16.5" y1="9.5" y2="16.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
              <path fill="#008aa9" d="M50.827,14.851l-9.689-9.68C40.806,4.839,40.417,4.584,40,4.389V12c0,2.209,1.791,4,4,4h7.616	C51.42,15.579,51.162,15.185,50.827,14.851z"></path>
              <path fill="#008aa9" d="M25,24h15c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2H25c-1.105,0-2,0.895-2,2v0	C23,23.105,23.895,24,25,24z"></path>
              <path fill="#008aa9" d="M25,32h15c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2H25c-1.105,0-2,0.895-2,2v0	C23,31.105,23.895,32,25,32z"></path>
              <path fill="#008aa9" d="M25,40h15c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2H25c-1.105,0-2,0.895-2,2v0	C23,39.105,23.895,40,25,40z"></path>
            </svg>
            <h3 className="text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white">Summarise</h3>
          </div>
          <label className="inline-flex items-center cursor-pointer dark-mode-toggle">
            <input type="checkbox" value="" className="sr-only peer" onChange={toggleDarkMode} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex flex-col md:flex-row items-center p-4 gap-4">
          <InputComponent/>
          <OutputComponent/>
        </div>
      </div>
    </div>
  );
};

export default SummariseComponent;
