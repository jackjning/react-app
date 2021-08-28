import { Counter } from "./features/counter/Counter"

const Home = (props) => {
    console.log(props)
    console.log("This is Jack");
    return (
      <div>
      <div> This is the Homepage. </div>
      <Counter />
      </div>
  );
}

export default Home;
