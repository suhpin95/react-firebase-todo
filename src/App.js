import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from './components/Tasks';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
