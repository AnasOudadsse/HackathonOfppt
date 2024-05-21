import { Fragment } from "react";
import style from "./CompanyPotential.module.css";

const CompanyPotential = () => {
  return (
    <Fragment>
      <div className={`${style.title}`} >
        <h1>Unlock Your Comapnay</h1>
        <p>Our platform provides comprehensive solutions to help Moroccan companies thrive. </p>
      </div>

      <div>
        <div>
            <h1>Training Management</h1>
            <p>Streamline your employee training with our intuitive platform. </p>
        </div>
        <div>
            <h1>Training Management</h1>
            <p>Streamline your employee training with our intuitive platform. </p>
        </div>
        <div>
            <h1>Training Management</h1>
            <p>Streamline your employee training with our intuitive platform. </p>
        </div>
      </div>
    </Fragment>
  );
};

export default CompanyPotential;
