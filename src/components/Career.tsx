import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Web Development with AI Intern</h4>
                <h5>HCL Tech (UPSDM – Uttar Pradesh Skill Development Mission)</h5>
              </div>
              <h3>OCT ‘2024 – MAR ‘2025</h3>
            </div>
            <p>
              Working with MySQL, REST APIs, and front-end technologies. Collaborating with 5 members team to build a real-world AI-integrated project.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>SoftCure Technology LLP, Meerut, India</h5>
              </div>
              <h3>Oct 2024 – Present</h3>
            </div>
            <p>
              Developing dynamic web modules using PHP, AJAX, jQuery, and MySQL. Creating responsive UI components and improving user experience with jQuery. Building and integrating REST-based features using PHP + AJAX. Writing optimized MySQL queries for CRUD operations. Debugging, fixing UI/logic issues, and enhancing system performance. Working on real client projects under senior developer guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
