import Button from "../components/Button";
import '../styles/home.scss'

const Home = () => {

  return (
    <div className="banner content">
      <h1>Welcome!</h1>
      <h2>Please select activity</h2>
      <div className="wrapper">
        <Button to="/products" variant="primary">Products</Button>
        <Button to="/tasks" variant="secondary">Tasks</Button>
      </div>
    </div>
  );
};

export default Home;
