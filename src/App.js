import './App.css';
import MenuList from './components/MenuList';

function App() {
  return (
    <div className=" p-4 text-white">
      <div className='flex justify-center'>
        <img src="mesua_logo.png" alt="" className="h-[120px]" />
      </div>
      {/* <div>

      </div> */}
      <h1 className='my-5 text-xl font-semibold'>Menu List</h1>
      <MenuList />
    </div>
  );
}

export default App;
