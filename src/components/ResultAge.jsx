/* eslint-disable react/prop-types */
import styles from "./ResultAge.module.css";

export const ResultAge = ({ dayResult, monthResult, yearResult }) => {
  return (
    <div className={styles.containerResultAge}>
      <p>
        <span>{yearResult}</span>
        {yearResult !== 1 ? "years" : "year"}
      </p>

      <p>
        <span>{monthResult} </span>
        {monthResult > 1 ? "months" : "month"}
      </p>
      <p>
        <span>{dayResult}</span>
        {dayResult > 0 ? "days" : "day"}
      </p>
    </div>
  );
};
