import styles from "../styles/components/DomainItem.module.css";
// import arrow from "../assets/images/icons/arrow.png";
// import logo from "../assets/images/techLogo.png";
const DomainItem = (props) => {
  return (
    <div
      className={styles.department}
      // style={{ backgroundImage: {} }}
    >
      <div className={styles.blackBackground}>
        <img
          src={props.image}
          width={"100%"}
          height={"100%"}
          alt=""
        />
      </div>
      <div className={styles.blackBackground} />
      <div className={styles.nameDiv}>
        <p className={styles.title}>{props.title}</p>
        <br />
        <p className={styles.know}>{props.des}</p>
      </div>
    </div>
  );
};

export default DomainItem;
