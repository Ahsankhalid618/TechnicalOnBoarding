/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/core.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "News Website 🎉",
    description:
      "Latest News about every trend around world",
    url: "https://ahsankhalid618.github.io/News-website/",
  },
  {
    title: "Weather App",
    description:
      "The weather app project is a dynamic and user-friendly web application that uses React.js to retrieve current and 5-day weather forecasts for various cities around the world. The app allows users to search for a city by name and view its weather conditions, including temperature, humidity, wind speed, and description of the current weather.",
    url: "https://ahsankhalid618.github.io/react-weather-app/",
  },
  {
    title: "Word Counter",
    description:
      "The project is a Word Counter application made in React.js. It allows the user to count the number of words in a given sentence. The app also provides a dark mode option for users who prefer a darker interface.The app has a preview section that displays the typed words in real-time. ",
    url: "https://ahsankhalid618.github.io/wordcounter/",
  },
  {
    title: "Chat App",
    description:
      "The application allows multiple users to chat with each other in real-time and store chat data in Firebase. The application is built with React.js, a JavaScript library for building user interfaces. React.js is known for its performance, flexibility, and scalability. ",
    url: "https://ahsankhalid618.github.io/chatapp/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
