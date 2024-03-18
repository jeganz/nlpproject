import { useEffect, useState } from 'react';
import './App.css';
import SummariseComponent from './components/summary';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  };

  return (
    <div className="bg-gray-200">
      <section className={`bg-white h-max dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]`}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 p-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Seamless&nbsp;
            <span className="block md:inline bg-clip-text text-transparent bg-gradient-to-r from-green-500  to-indigo-500">Summarization</span> 
            <br />right within reach
          </h1>
          <SummariseComponent toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
        <div className="bg-gradient-to-b w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
    </div>
  );
}

export default App;
