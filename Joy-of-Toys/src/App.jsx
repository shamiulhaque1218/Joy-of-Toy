import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/footer/Footer'
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    const routeName = location.pathname; // Get the current route name
    const pageTitle = getPageTitle(routeName); // Define a function to get the page title based on the route

    document.title = pageTitle; // Update the website title
  }, [location]);
  const getPageTitle = (routeName) => {
    // Define your logic to determine the page title based on the route
    // You can use a switch statement, object mapping, or any other method based on your specific requirements
    switch (routeName) {
      case '/':
        return 'Joy Of Toys | Home';
      case '/mydata':
        return 'Joy Of Toys | My Data';
      case '/alltoys':
        return 'Joy Of Toys | All Toys';
      case '/blogs':
        return 'Joy Of Toys | Blog';
      case '/login':
        return 'Joy Of Toys | Login';
      case '/signup':
        return 'Joy Of Toys | Signup';
      case '/contact':
        return 'Joy Of Toys | Contact';
      case '/about':
        return 'Joy Of Toys | About';
      default:
        return 'Joy Of Toys ';
    }
  };


  return (
    <div>
      <div className='p-0'>
      <Navbar> </Navbar>
      </div>
      <Outlet> </Outlet>
      <Footer> </Footer>
    </div>
  )
}

export default App
