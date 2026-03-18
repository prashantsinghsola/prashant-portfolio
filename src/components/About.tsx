import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Final-year B.Tech CSE student specializing in Full Stack MERN development with expertise in building, testing,
          and deploying scalable web applications. Proficient in MySQL databases, MongoDB with proven problem
          solving and algorithmic abilities demonstrated through LeetCode practice. Passionate about delivering efficient,
          high-quality software solutions.
          <br /><br />
          <strong>Certifications & Courses:</strong><br />
          • Data Structure and Algorithm (DSA) in JAVA - Alpha Batch (JAN '2025 - PRESENT): Learned Sorting, Searching, Recursion, Dynamic programming, Graphs, Trees, and OOP concepts.<br />
          • Full stack Web Development (MERN) - Delta Batch (JAN '2025 - PRESENT): Learned MERN Stack (MongoDB, Express.js, React.js, Node.js). Developed full-stack projects, REST APIs, and database integration. Worked with HTML, CSS, JavaScript, Bootstrap for front-end.
        </p>
      </div>
    </div>
  );
};

export default About;
