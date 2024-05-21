import style from "./ContinuesTraining.module.css";

const ContinousTraining = () => {
  return (
    <div className={` ${style.section}`}>
      <div className={`col ${style.first}`}>
        <h1>Empower Your Business with Continuous Training</h1>
        <p className={`${style.para}`}>
          Our platform provides Moroccan companies with comprehensive training
          and technical assistance services to help you stay ahead in a rapidly
          evolving market.
        </p>
        <div>
          <button className={`${style.button}`}>Get Started</button>
        </div>
      </div>
      <div className={`col ${style.second}`}>
        <img className={`${style.image}`} src="./learning/learning.jpg" />
      </div>
    </div>
  );
};

export default ContinousTraining;
