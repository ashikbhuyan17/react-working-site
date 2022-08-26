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
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Article from './components/article-upload-image/AddArticle';
import UseReducer1 from './components/useReducer-anisul-islam-sir/UseReducer1';
import UseReducer2 from './components/useReducer-anisul-islam-sir/UseReducer2';

function App() {
  return (
    // <div >
    //   <Navbar />
    //   <TodoPostForm/>
    // </div>
    <BrowserRouter>

      <Navbar />
      <ToastContainer />
      <Routes>
        {/* auth */}
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />


        {/* todo */}
        <Route path="postTodo" element={<PostTodo />} />
        <Route path="getTodo" element={<GetTodo />} />
        <Route path="getTodo/:getTodoId" element={<PutTodo />} />

        {/* article for image upload */}
        <Route path="article" element={<Article />} />

        {/* userReducer By Anisul Islam Sir */}
        <Route path="UseReducer1" element={<UseReducer1 />} />
        <Route path="UseReducer2" element={<UseReducer2 />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
