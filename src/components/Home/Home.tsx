import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>home</h1>
      <Link to="/create">create</Link>
    </section>
  );
};

export default Home;
