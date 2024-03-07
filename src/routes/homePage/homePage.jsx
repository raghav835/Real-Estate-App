import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Dream Home with Us</h1>
          <p>
            Discover the perfect place that suits your lifestyle. Our team of
            experienced professionals is dedicated to helping you find the
            ideal home for you and your family. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos explicabo suscipit cum eius,
            iure est nulla animi consequatur facilis id pariatur fugit quos
            laudantium temporibus dolor ea repellat provident impedit!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>25+</h1>
              <h2>Years of Real Estate Expertise</h2>
            </div>
            <div className="box">
              <h1>350</h1>
              <h2>Awards and Recognitions</h2>
            </div>
            <div className="box">
              <h1>5000+</h1>
              <h2>Properties Ready for You</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Cityscape" />
      </div>
    </div>
  );
}

export default HomePage;
