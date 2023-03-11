import About from "./About";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div
        className="bg-[url('https://img.freepik.com/free-photo/dark-blue-product-background_53876-92801.jpg?w=996&t=st=1678526067~exp=1678526667~hmac=d6ae1c79b15fe2890f53e7dfe6c27c9280e7f503eb105288be2a7a0767f2a30c')] h-screen"
        style={{ backgroundColor: "#CBE4DE" }}
      >
        <About />
      </div>
    </>
  );
}

export default Home;
