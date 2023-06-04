import styles from "./FormDate.module.css";

import arrowDown from "../../src/assets/arrowDown.svg";
import { ResultAge } from "./ResultAge";

const FormDate = () => {
  return (
    <div className={styles.containerFormData}>
      <form className={styles.form}>
        <label className={styles.label}>
          Day
          <input className={styles.inputDate} type="text" placeholder="DD" />
        </label>

        <label className={styles.label}>
          Month
          <input className={styles.inputDate} type="text" placeholder="MM" />
        </label>

        <label className={styles.label}>
          Year
          <input className={styles.inputDate} type="text" placeholder="YYYY" />
        </label>
      </form>

      <hr />
      <button className={styles.btnCalc}>
        <img src={arrowDown} alt="" />
      </button>

      <ResultAge />
    </div>
  );
};
export default FormDate;
