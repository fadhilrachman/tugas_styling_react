import "./App.css";

function App() {
  const handleWa = () => {
    window.open("https://wa.me/0881022077883");
  };
  return (
    <div className="scroll-smooth">
      <div className="flex justify-between border-b  border-solid p-5 px-7 bg-white fixed w-screen">
        <div>FadhilPorto</div>
        <div>
          <ul className="flex justify-around text-sky-400  text-lg font-medium">
            <a href="">
              <li className="mx-4">Home</li>
            </a>{" "}
            <a href="#profile" className="scroll-smooth">
              <li className="mx-4">Profile</li>
            </a>{" "}
            <a href="#contact">
              <li className="mx-4">Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="flex justify-between px-11 h-screen ">
        <div className="mt-40">
          <h1 className="text-4xl text-sky-400 ">Hello</h1>
          <h1 className="text-6xl font-semibold mt-4 text-sky-400">
            I`M FADHIL
          </h1>
          <p className="text-2xl mt-5 font-light w-7/12">
            I am a junior frontend developer and I am motivated to become a full
            stack developer
          </p>
          <button
            onClick={handleWa}
            className="border py-3 px-7 mt-5 rounded-3xl  bg-sky-300 hover:bg-sky-400 text-white font-semibold text-1xl"
          >
            Lets`Talk
          </button>
        </div>
        <div className="flex justify-center items-center  mt-20">
          <img
            src="https://img.freepik.com/free-vector/man-reading-illustration_114360-8535.jpg?size=338&ext=jpg&ga=GA1.1.1056913818.1672935173&semt=sph"
            alt=""
            className="max-h-max"
            srcset=""
          />
        </div>
      </div>
      <div className=" bg-sky-400 text-white px-44 py-16" id="profile">
        <div>
          <h1 className="text-5xl">Profile</h1>
          <ul className="text-2xl mt-8">
            <li>Nama : Muhammad Fadhil rahman</li>
            <li className="mt-3">Umur : 18 </li>
            <li className="mt-3">Domisili : Garut </li>
            <li className="mt-3">
              Skill : Javascript, React JS, Node Js, Express Js{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="  px-40 py-10 flex justify-center" id="contact">
        <a href="https://www.instagram.com/padilrahman1/" className="flex mr-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1051/1051364.png?w=740&t=st=1675793439~exp=1675794039~hmac=4541aa395b3900121540e5c4e2c86f1b650e0c8c661534e59b705e0e85f691a5"
            alt=""
            className="h-6 mr-2"
          />
          Instagram
        </a>
        <a href="https://github.com/fadhilrachman" className="flex mr-4">
          <img
            src="https://img.freepik.com/free-icon/github-sign_318-42173.jpg?size=338&ext=jpg&ga=GA1.2.1056913818.1672935173&semt=sph"
            alt=""
            className="h-6 mr-2"
          />
          Github
        </a>
        <a href="https://gitlab.com/muhfadhilrachman" className="flex mr-4">
          <img
            src="https://img.freepik.com/free-icon/github-sign_318-42173.jpg?size=338&ext=jpg&ga=GA1.2.1056913818.1672935173&semt=sph"
            alt=""
            className="h-6 mr-2"
          />
          Gitlab
        </a>
      </div>
    </div>
  );
}

export default App;
