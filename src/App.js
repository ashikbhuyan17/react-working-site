import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import TodoPostForm from './components/todo/TodoPostForm';

function App() {
  return (
    <div >
      <Navbar />
      <TodoPostForm/>
    </div>
  );
}

export default App;
