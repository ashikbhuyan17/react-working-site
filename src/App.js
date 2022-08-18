import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GetTodo from './components/todo/GetTodo';
import PostTodo from './components/todo/PostTodo';
import PutTodo from './components/todo/PutTodo';

function App() {
  return (
    // <div >
    //   <Navbar />
    //   <TodoPostForm/>
    // </div>
    <BrowserRouter>
      <Navbar />
      <Routes>

        {/* todo */}
        <Route path="postTodo" element={<PostTodo />} />
        <Route path="getTodo" element={<GetTodo />} />
        <Route path="getTodo/:getTodoId" element={<PutTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
