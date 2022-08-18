import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import TodoPostForm from './components/todo/TodoPostForm';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
  , Outlet,
  useParams
} from "react-router-dom";
import TodoGet from './components/todo/TodoGet';
import Homes from './components/pages/Homes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
          <Route path="sent" element={<SentInvoices />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>
      <Outlet />
    </div>
  );
}

function Invoice() {
  let { invoiceId } = useParams();
  console.log("...............", invoiceId);
  return <h1>Invoice {invoiceId}</h1>;
}

function SentInvoices() {
  return <h1>Sent Invoices</h1>;
}
export default App;
