import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Contact } from './components/pages/Contact';
import { Login } from './components/Account/Login';
import { NewArrival } from './components/pages/NewArrival';
import { SingUp } from './components/Account/SignUp';



//vendor deshboard nested route imported...

import VDashboard from './Newdashborad/VDashbord';
import VendorDashboard from './Newdashborad/Pages/VendorDashboard';
import AllProducts11 from './Newdashborad/Pages/AllProducts11';
import Orders11 from './Newdashborad/Pages/Orders11';
import Earning11 from './Newdashborad/Pages/Earning11';
import Bills11 from './Newdashborad/Pages/Bills11';
import Messages11 from './Newdashborad/Pages/Messages11';
import  Profile from './Newdashborad/Pages/Profile';
import ChangePassword11 from './Newdashborad/Pages/ChangePassword11';
import { AddProduct} from './Newdashborad/Pages/AddProduct'

//Admindashboard all import and routes

import AdminDashboard from "./dashbord/Pages/AdminDashboard";
import  AppDashboard from './dashbord/AppDashbord';
import Bills from "./dashbord/Pages/Bills";
import ChangePassword from "./dashbord/Pages/ChangePassword"; 
import Logout from "./dashbord/Pages/Logout";
import Messages from "./dashbord/Pages/Messages";
import AllProducts from "./dashbord/Pages/AllProducts";
import {AddCategory} from './dashbord/Pages/AddCategory';
import Earning from "./dashbord/Pages/Earning";
import Tenants from "./dashbord/Pages/Tenants";
import Orders from "./dashbord/Pages/Orders";
import AllVendors from './dashbord/Pages/AllVendors';
import { Cart } from './components/pages/Cart';





function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Contact' element={<Contact/>} />
          <Route path='Login'  element={<Login/>} />
          <Route path='Signup' element={<SingUp/>} />
          <Route path='NewArrival' element={<NewArrival/>} />
          <Route path='Cart' element={<Cart/> } />

          <Route path='Vendordashboard'  element={<VDashboard/>} >
           <Route path='Vendordashboard' element={<VendorDashboard/>}   />       
            <Route path='AllProducts11' element={<AllProducts11/>} />
            
            <Route path='Orders11' element={<Orders11/>} />
            <Route path='Earning11' element={<Earning11/>} />
            <Route path='Bills11'  element={<Bills11/>} />
            <Route path='messages11' element={<Messages11/>} />
            <Route path='Profile'  element={<Profile/>} />
            <Route path='changepassword11' element={<ChangePassword11/>}/>
            <Route path='AllProducts11/AddProduct' element={<AddProduct/>} />
         </Route>


         <Route path="/admindashboard/" element={<AppDashboard />}>
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="AllProducts" element={<AllProducts />} />
          <Route path='AddCategory' element={<AddCategory/>} />
          
    {/* route for AdminDashboard */}
          
          <Route path="AllVendors" element={<AllVendors />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="Earning" element={<Earning />} />
          <Route path="bills" element={<Bills />} />
          <Route path="messages" element={<Messages />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} />
          
          <Route path="*" element={<> not found</>} />
        </Route>
         </Routes>


      </Router>
      
    </div>
  );
}

export default App;
