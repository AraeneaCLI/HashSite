/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/backgroundAraeneaCLI2.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "CSE in Cyber Security Student";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Full Stack Development",
  "Mobile Application Development",
  "Desktop Application Development",
  "Reverse Engineering",
  "Digital Forensics"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Create, Explore, Expand, Conquer";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt="" />
      <div
        style={{
          color: "whitesmoke",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          FontFace: "sans-serif",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "24px",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;