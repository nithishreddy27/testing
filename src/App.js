
import './App.css';
import Resume from './component/Resume';
import Sidebar from './component/Sidebar';
import NoteState from './context/NoteState';

function App() {
  return (

    <NoteState>
    <div className='flex '>

    <div className="w-[30%] bg-gray-200 h-screen">
      <Sidebar/>
    </div>
    <div className="w-[70%] h-screen">
      <Resume/>
    </div>
    </div>

    
    </NoteState>
  );
}

export default App;
