import { Link } from "react-router-dom";
import '../styles/home.scss'

const Home = () => {

  return (
    <div className="banner content">
      <h1>Welcome!</h1>
      <h2>Please select activity</h2>
      <div className="wrapper">
        <Link className="button-1" to="/products">Products</Link> 
        <Link className="button-2" to="/tasks">Tasks</Link> 
      </div>
    </div>
  );
};

export default Home;
