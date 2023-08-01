import "./About.scss";
import Me from "../../assets/images/DemoDay.jpeg";

function About() {
  return (
    <section className="about">
      <div className="about__title">
        <h1 className="about__title-content">About</h1>
      </div>
      <div className="about__mission">
        <h3 className="about__mission-title">Mission</h3>
        <p className="about__mission-content">
          KitchenKeepr is an app with a mission to simplify cooking by offering
          a user-friendly platform with a vast collection of easy web recipes.
          Our intuitive design and step-by-step guides ensure stress-free
          cooking for all levels. With customizable dietary filters, users can
          find recipes that fit their preferences. The app also fosters a
          supportive community of food enthusiasts, encouraging sharing and
          learning together. Join us in bringing the joy of cooking back to your
          kitchen, one easy web recipe at a time.
        </p>
      </div>
      <div className="about__developer">
        <h3 className="about__developer-title">Developer</h3>
        <p className="about__developer-content">
          Hello there! I'm thrilled to introduce you to KitchenKeepr, a project
          close to my heart as it marks the culmination of my software bootcamp
          journey. With my passion for cooking and technology, I've designed
          this app using a powerful tech stack that includes React, Node.js,
          Express, HTML, CSS, and JavaScript. To ensure smooth data handling,
          I've implemented MySQL and Knex. And to make it easily accessible,
          KitchenKeepr is hosted on Heroku. I want you to have an enjoyable
          experience exploring countless easy web recipes and connecting with
          fellow food enthusiasts. If you have any questions or just want to say
          hi, feel free to reach out to me or connect with me on with links
          below.
        </p>
        <img
          src={Me}
          alt="Picture of the developer in a corn costume"
          className="about__developer-img"
        />
      </div>
    </section>
  );
}

export default About;
