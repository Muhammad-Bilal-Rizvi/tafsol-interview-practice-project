// import logo from './logo.svg';
// import './App.css';
// Wesite Deployed Link : https://tafsol-interview-project.surge.sh/

import FirstComponent from './components/FirstComponent';
import NavBar from './components/NavBar';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import { testData } from './components/data'

function App() {
  return (
    <div className="">
      <NavBar />
      <FirstComponent />
      <SecondComponent data={testData}/>
      <ThirdComponent />
    </div>
  );
}

export default App;
