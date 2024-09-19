import React from "react";
import styles from "../styles/pages/Domain.module.css";
import DomainItem from "../components/DomainItem";
import blockchain from "../assets/images/domains/Block Chain.png";
import ai from "../assets/images/domains/AI.png";
import cs from "../assets/images/domains/Cyber Security.png";
import ds from "../assets/images/domains/Data Science.png";
import gd from "../assets/images/domains/game dev.jpg";
import iot from "../assets/images/domains/IOT.jpg";
import ml from "../assets/images/domains/ML.jpg";
import sd from "../assets/images/domains/Software Development.png";
import ui from "../assets/images/domains/UIUX.jpg";
import wap from "../assets/images/domains/Web APP DEV.png";

function Domain() {
  return (
    <div className={styles.container} id="domain">
      <p className={styles.heading}>Domains</p>
      {/* <div className={styles.domainContainer}> */}
      <div className={styles.domain}>
        <DomainItem
          image={ai}
          title={"Artificial Intelligence"}
          des={
            "Empowering machines to mimic human cognitive functions such as learning, problem-solving, and decision-making, revolutionizing industries through automation, personalization, and the creation of intelligent systems."
          }
        />
        <DomainItem
          image={blockchain}
          title={"Blockchain Technology"}
          des={
            "Utilizing decentralized, immutable ledgers to secure and verify transactions, enabling trust, transparency, and e ciency in financial systems, supply chains, and digital identities."
          }
        />
        <DomainItem
          image={cs}
          title={"Cybersecurity"}
          des={
            "Safeguarding digital assets and networks from malicious threats and unauthorized access through robust encryption, intrusion detection, and threat intelligence, ensuring the confidentiality, integrity, and availability of sensitive information."
          }
        />
        <DomainItem
          image={ds}
          title={"Data Science"}
          des={
            "Unveiling actionable insights from complex datasets through statistical analysis and machine learning techniques, empowering informed decisionmaking and predictive modeling across industries."
          }
        />
        <DomainItem
          image={gd}
          title={"Game Development"}
          des={
            "Creating immersive digital experiences for entertainment, education, and simulation, combining art, technology, and storytelling to captivate players and drive engagement."
          }
        />
        <DomainItem
          image={iot}
          title={"Internet of Things (IoT)"}
          des={
            "Interconnecting physical devices and objects via the internet, enabling data collection, analysis, and automation to enhance efficiency, convenience, and decision-making in various domains."
          }
        />
        <DomainItem
          image={sd}
          title={"Software Development"}
          des={
            "Crafting scalable and reliable software solutions through systematic coding, testing, and deployment processes, fulfilling user requirements and business objectives with e ciency, quality, and innovation."
          }
        />
        <DomainItem
          image={ml}
          title={"Machine Learning"}
          des={
            "Teaching computers to learn from data, enabling them to make predictions and decisions without explicit programming, driving innovations in areas like healthcare, finance, and autonomous vehicles."
          }
        />
        <DomainItem
          image={ui}
          title={"UI/UX Design"}
          des={
            "Crafting intuitive and delightful user interfaces and experiences, prioritizing usability, accessibility, and aesthetics to enhance user satisfaction and engagement."
          }
        />
        <DomainItem
          image={wap}
          title={"Web/App Development"}
          des={
            "Designing and building software applications for smartphones and tablets, enhancing user engagement, productivity, and accessibility through intuitive interfaces and robust functionality."
          }
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Domain;
