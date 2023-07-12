import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Homepage from './Homepage';
import FriendsDispaly from './FriendsDispaly';
import FriendDetails from './FriendDetails';


function App() {
  return (
  
      
    
      <BrowserRouter>
        <div>
     
      <Header />
      <Navigation />
   
        <Routes>
          <Route path="/" element={<Homepage />}>
          
          </Route>
          <Route path="/friends" element={<FriendsDispaly />}>
   
          </Route>
          <Route path="/details/:id" element={<FriendDetails />}>
   
   </Route>

        </Routes>
        <Footer />  

        </div>
    </BrowserRouter>
    




    
  );
}

export default App;
