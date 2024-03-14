import React, { useState } from 'react';

const InputComponent = ({ summarizeHandler }) => {
    const [texttosum, settexttosum] = useState('')

    const onTextchange=(e)=>{
        settexttosum(e.target.value)
    }

    const textEraser=()=>{
        settexttosum('')
    }

    const dummysummarizeHandler=()=>{
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:5000/apicall');
              const responseData = await response.json();
              console.log(responseData);
              settexttosum(responseData.response)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData()
    }

  return (
    <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <div className="flex flex-col items-center pb-6">
        <textarea
          id="message"
          rows="4"
          value={texttosum}
          className="block p-2.5 m-4 w-11/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          onChange={onTextchange}
        ></textarea>
        <button
          type="button"
          id="delete-btn"
          onClick={textEraser}
          className="absolute top-5 right-3 md:right-5 opacity-70 text-white hover:text-white border bg-red-500 border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-2 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-white dark:hover:text-white dark:hover:bg-red-600  transition-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-trash transition-none"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path className="transition-none" d="M4 7l16 0" />
            <path className="transition-none" d="M10 11l0 6" />
            <path className="transition-none" d="M14 11l0 6" />
            <path className="transition-none" d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path className="transition-none" d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
        <div className="flex mt-4 md:mt-6 gap-1">
          <button
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-2 py-1 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-500 hover:ring-offset-indigo-200 ease focus:outline-none"
            onClick={dummysummarizeHandler}
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Summarize
            </span>
          </button>
          <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 dark:border-indigo-400 text-indigo-600 text-white">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative flex text-indigo-600 dark:text-indigo-400 transition-colors duration-300 group-hover:text-white ease">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo-plus mr-2 transition-none" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path className="transition-none" stroke="currentColor" d="M15 8h.01" />
                <path className="transition-none" stroke="currentColor" d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
                <path className="transition-none" stroke="currentColor" d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
                <path className="transition-none" stroke="currentColor" d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54" />
                <path className="transition-none" stroke="currentColor" d="M16 19h6" />
                <path className="transition-none" stroke="currentColor" d="M19 16v6" />
              </svg>
              Upload
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
