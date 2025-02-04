
import { NavLink, useLoaderData } from "react-router-dom";
import Cards from "./Cards/Cards";
import "animate.css";
import Marquee from "react-fast-marquee";
import VisionSection from "./VisionSection/VisionSection";
import ContactUs from "./ContactUs/ContactUs";


const Home = () => {
  const datas = useLoaderData();
  const sortedDatas = datas.sort((a, b) => b.rating - a.rating);
  const limitedDatas = sortedDatas.slice(0, 6);

  return (
    <div className="dark:bg-slate-800 -mt-7">

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-96">
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://img.lovepik.com/background/20211022/medium/lovepik-film-festival-movie-film-light-effect-background-image_605810486.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
              <div>
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__bounce text-purple-500">
                  Movie Portal
                </h1>
                <p className="mb-5 lg:px-40 md:px-20 px-14">
                  "Discover Your Next Favorite Movie! 🌟 Explore top-rated films, watch trailers,
                  and get personalized recommendations—all in one place!"
                </p>
                <a href="#card">
                  <button className="btn btn-primary">Get Started</button>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-96">
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://static.vecteezy.com/system/resources/thumbnails/014/000/181/small/red-stage-curtain-illuminated-by-spotlights-illustration-vector.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
              <div>
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__bounce text-purple-500">
                  Movie Portal
                </h1>
                <p className="mb-5 lg:px-40 md:px-20 px-14">
                  "Discover Your Next Favorite Movie! 🌟 Explore top-rated films, watch trailers,
                  and get personalized recommendations—all in one place!"
                </p>
                <a href="#card">
                  <button className="btn btn-primary">Get Started</button>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-96">
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/movie-background-collage_23-2149876023.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
              <div>
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__bounce text-purple-500">
                  Movie Portal
                </h1>
                <p className="mb-5 lg:px-40 md:px-20 px-14">
                  "Discover Your Next Favorite Movie! 🌟 Explore top-rated films, watch trailers,
                  and get personalized recommendations—all in one place!"
                </p>
                <a href="#card">
                  <button className="btn btn-primary">Get Started</button>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Featured Movies */}
      <div className="bg-gradient-to-bl from-[#5b3bf5] 0% to-[#f04343] 100% text-purple-900 text-center border-b-2 py-4">
        <h1 className="text-5xl font-bold underline italic text-purple-800">Featured Movies</h1>
      </div>
      <div id="card" className="bg-gradient-to-bl from-[#5b3bf5] 0% to-[#f04343] 100% text-purple-900 p-8 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
        {limitedDatas.map((data) => (
          <Cards key={data.id} data={data}></Cards>
        ))}
      </div>
      <NavLink to={"/allmovies"}>
        <h1 className="bg-gradient-to-bl from-[#5b3bf5] 0% to-[#f04343] 100% py-2 text-center text-3xl font-bold bg-purple-300 text-purple-800">
          See All Movies
        </h1>
      </NavLink>

      {/* Movies Gallery */}
      <div className="bg-gradient-to-bl from-[#5b3bf5] 0% to-[#f04343] 100% text-purple-900 p-4 border-2 shadow-xl">
        <div>
          <p className="text-center text-5xl font-semibold italic text-green-500 my-4">
            Movies Gallery
          </p>
        </div>
        <Marquee speed={40}>
          <div className="grid grid-cols-9 gap-4 my-4">
            {datas.map((data) => (
              <div key={data.id} className="mx-4">
                <img className="w-full h-40" src={data.poster} alt="" />
                <p className="font-bold text-center">{data.title}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Vision Section */}
      <div className="bg-gradient-to-bl from-[#5b3bf5] 0% to-[#f04343] 100% text-purple-900  py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisionSection />
        </div>
      </div>
      {/* Contact Us Section */}
      <div>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
