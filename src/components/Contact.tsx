import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:aditya851999@gmail.com" data-cursor="disable">
                aditya851999@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Diploma in Professional Graphic Designing - Zee Institute of Creative Arts</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.behance.net/adityajad8519"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-jadhav-345649219/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://instagram.com/platinum_085"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              <span className="designed-by">Designed <br /> by</span>{" "}
              <span className="designed-name">Aditya Jadhav</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
