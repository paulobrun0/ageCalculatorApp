/* eslint-disable react/prop-types */
import styles from "./ResultAge.module.css";

export const ResultAge = ({ dayResult, monthResult, yearResult }) => {
  return (
    <div className={styles.containerResultAge}>
      <p>
        <span>{yearResult}</span>years
      </p>
      <p>
        <span>{monthResult}</span>months
      </p>
      <p>
        <span>{dayResult}</span>days
      </p>
    </div>
  );
};
