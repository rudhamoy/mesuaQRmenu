import './App.css';
import MenuList from './components/MenuList';

function App() {
  return (
    <div className=" p-4 text-white">
      <div className='flex justify-center'>
        <img src="mesua_logo.png" alt="" className="h-[120px]" />
      </div>
      <div className="my-5 flex flex-col justify-center items-center text-xl font-mono">
        <p className="font-semibold ">Timing (Mon - Sun)</p>
        <div className="flex items-center gap-x-4 text-center">
          <p>11:00 am</p>
          <span>to</span>
          <p>10:00 pm</p>
        </div>
      </div>
      <div>
        <img className="w-[100%]" src="MenuOne.png" alt="" />
        <img className="w-[100%]" src="MenuTwo.png" alt="" />
        <img className="w-[100%]" src="MenuThree.png" alt="" />
      </div>
      {/* <h1 className='my-5 text-xl font-semibold'>Menu List</h1>
      <MenuList /> */}
    </div>
  );
}

export default App;
