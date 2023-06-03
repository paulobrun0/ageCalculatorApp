import styles from "./ResultAge.module.css";

export const ResultAge = () => {
  return (
    <div className={styles.containerResultAge}>
      <p>
        <span>- -</span>years
      </p>
      <p>
        <span>- -</span>months
      </p>
      <p>
        <span>- -</span>days
      </p>
    </div>
  );
};
