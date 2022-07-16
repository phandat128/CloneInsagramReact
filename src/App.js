// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';

function App() {
  return (
    <div className="App">
            <Header/>
        <main>
            <div class="main">
                <Body/>
                <Sidebar/>
            </div>
        </main>
    </div>
  );
}

export default App;
