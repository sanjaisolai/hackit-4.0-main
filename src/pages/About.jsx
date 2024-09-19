import React from "react";
import styles from "../styles/pages/About.module.css";

function About() {
  return (
    <div className={styles.container} id="about">
      <p className={styles.heading}>About</p>
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
          <h1>About Mr Cooper</h1>
          <p style={{ textAlign: "justify" }}>
            Mr. Cooper stands as a prominent figure in the home loan servicing
            sector within the United States offering an extensive array of
            servicing and lending solutions coupled with cutting-edge
            technologies.
            <span className={styles.hide}>
              Our commitment revolves around preserving the essence of
              homeownership for our clients ensuring personalized assistance
              across every facet of their homeownership journey. Whether
              embarking on a home purchase, sale or settling into a cherished
              abode. Mr. Cooper pledges to alleviate concerns and enhance
              satisfaction at each phase. Through a steadfast dedication to
              exemplary customer service and forward-thinking technological. Mr.
              Cooper endeavors to streamline the mortgage process, enabling
              customers to make well-informed decisions with confidence. As one
              of the nation's foremost servicers, Mr. Cooper possesses the
              seasoned expertise and robust resources necessary to guide
              homeowners adeptly through the intricacies of homeownership.
            </span>
          </p>
          <div className={styles.wrapper}>
            <div>
              <h1>About CSI</h1>
              <br />
              <p style={{ textAlign: "justify" }}>
                Computer Society of India(CSI) was established in 1965. It has
                played a pivotal role in steering the Indian IT industry towards
                success since its inception. With a widespread presence boasting
                70 chapters across India along with 418 student branches and a
                membership exceeding 90,000 including renowned IT industry
                leaders, distinguished scientists, and committed academicians.
                <span className={styles.hide}>
                  CSI stands as a beacon of excellence in the realm of
                  Information and Communication Technology.Our primary objective
                  is to foster knowledge sharing among IT professionals and
                  researchers while nurturing the next generation of talent in
                  this dynamic field.
                </span>
              </p>
            </div>
            <div>
              <h1 >About AIT</h1>
              <br />
              <p style={{ textAlign: "justify" }}>
                The Association of Information Technologists (AIT) is a
                professional organization that is a student chapter affiliated
                with the Department of Information Technology. Our forum hosts a
                range of events including Industry Speaker Series, Virtual Open
                Days, Course Workshops, and #GRADTALKS Series to connect
                students with industry experts and showcase talented students.
                We even provide our students with certifications endorsed by
                companies that have signed MOUs with the Department of
                Information Technology.
              </p>
            </div>

            <div></div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default About;
