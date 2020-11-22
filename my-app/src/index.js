import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Importing the images

import ahmad_img from "./images/ahmad.jpg";
import angham_img from "./images/angham.jpg";
import dana_img from "./images/dana.jpg";
import abd_img from "./images/abd.jpg";
import osama_img from "./images/osama.jpg";

class Mean extends React.Component {
  user = [
    {
      name: "Ahmad",
      major: "Asp.net Developer ",
      img: ahmad_img,
      fasebook_url: "#",
      linkedin_url: "https://www.linkedin.com/in/ahmada3mar/",
      githuburl: "#",
    },

    {
      name: "Angham",
      major: "PHP Developer ",
      fasebook_url: "#",
      linkedin_url: "https://www.linkedin.com/in/angham-baniyounes/",
      img: angham_img,
      github_url: "#",
    },

    {
      name: "Dana",
      major: "Laraval Developer ",
      img: dana_img,
      fasebook_url: "#",
      linkedin_url: "https://www.linkedin.com/in/dana-toughoj/",
      github_url: "#",
    },

    {
      name: "Abdallah",
      major: "Unity Developer ",
      img: abd_img,
      fasebook_url: "#",
      linkedin_url: "https://www.linkedin.com/in/abdallah-alhajeid/",
      github_url: "#",
    },

    {
      name: "Osama",
      major: "React Developer ",
      img: osama_img,
      fasebook_url: "#",
      linkedin_url: "https://www.linkedin.com/in/osama-aburabi-e-1abb791b6/",
      github_url: "#",
    },
  ];
  render() {
    return (
      <div className="p-4 container-fliud">
        <div className="row">
          {this.user.map((x, index) => (
            <App
              key={x}
              id={parseInt(index)}
              name={x.name}
              img={x.img}
              url={x.linkedin_url}
              major={x.major}
            />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Mean />, document.getElementById("root"));
