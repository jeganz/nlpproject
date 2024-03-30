import React, { useState }  from 'react';

const OutputComponent = ({summary,setSummary}) => {
    const [showaudioplayer, setshowaudioplayer] = useState(false)
    const handleCopy=()=>{
        navigator.clipboard.writeText(summary)
    }
    const handleplay=()=>{
        showaudioplayer?setshowaudioplayer(false):setshowaudioplayer(true)
    }
    return (
        <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-6">
                <textarea
                    id="message"
                    disabled={true}
                    rows="9"
                    value={summary}
                    className="block p-2.5 m-4 w-11/12 text-sm text-gray-900 bg-white rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 scrollbar scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-transparent"
                    placeholder="Your Summary will appear here..."
                ></textarea>
                <div className="flex mt-4 md:mt-6 gap-1">
                    <div class="group relative ">
                        <button onClick={handleCopy}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy w-8 hover:scale-125 duration-200 hover:stroke-blue-500 dark:text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
                        </button>
                        <span
                            class="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
                        >Copy</span>
                    </div>
                    <button onClick={handleplay}
                        class="group flex items-center justify-start w-11 h-11 bg-lime-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                    >
                        <div
                            class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>
                        </div>
                        <div
                            class="absolute right-10 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        >Play
                        </div>
                    </button>
                </div>
                {showaudioplayer?<audio controls >
                    <source  type="audio/mpeg" src='http://localhost:5000/audio'/>
                    Your browser does not support the audio element.
                </audio>:null}
            </div>
        </div>
    );
};

export default OutputComponent;
