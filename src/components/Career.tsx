import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2 className="career-title" style={{ color: "var(--accentColor)", textTransform: "capitalize" }}>
          My Career <br className="mobile-br" /> <span style={{ color: "#FFFFFF" }}>and Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior <br /> <span style={{ whiteSpace: "nowrap" }}>Graphic Designer</span></h4>
                <h4 className="career-year">2019</h4>
                <h5>AV Enterprises Pvt Ltd</h5>
              </div>
            </div>
            <p>
              Started out in the trenches with sports and fashion brands. Handled fast paced logo designs and print layouts while learning exactly what it takes to build campaigns that actually work.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer <br /> & Consultant</h4>
                <h4 className="career-year">2019</h4>
                <h5>Altian Solutions Pvt Ltd</h5>
              </div>
            </div>
            <p>
              Stepped up to run full scale campaigns for finance and retail clients. Took raw concepts to final execution while juggling tight deadlines and keeping the visual quality razor sharp.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance <br /> Brand Designer</h4>
                <h4 className="career-year">2021</h4>
                <h5>Independent Clients</h5>
              </div>
            </div>
            <p>
              Went solo to craft distinct visual identities for lifestyle, fashion, and pet care brands. Built custom packaging and digital campaigns that gave niche businesses a massive visual upgrade.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior <br /> <span style={{ whiteSpace: "nowrap" }}>Graphic Designer</span></h4>
                <h4 className="career-year">2022 - 2023</h4>
                <h5>Lumens Technologies Pvt Ltd</h5>
              </div>
            </div>
            <p>
              Joined the Lumens team to support core design initiatives for tech and semiconductor sectors. Focused on creating scalable marketing assets and refining visual consistency across diverse digital platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4><span style={{ whiteSpace: "nowrap" }}>Graphic Designer</span></h4>
                <h4 className="career-year">2023 - 2024</h4>
                <h5>Lumens Technologies Pvt Ltd</h5>
              </div>
            </div>
            <p>
              Advanced to owning design projects from concept to delivery. Collaborated closely with cross-functional teams to produce high-impact visuals for product launches and global B2B marketing campaigns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior <br /> <span style={{ whiteSpace: "nowrap" }}>Graphic Designer</span></h4>
                <h4 className="career-year">2024 - NOW</h4>
                <h5>Lumens Technologies Pvt Ltd</h5>
              </div>
            </div>
            <p>
              Led the creative direction for major tech and semiconductor brands. Scaled up B2B marketing by delivering hundreds of high impact assets, directing product launches, and keeping brand consistency absolutely locked down.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
