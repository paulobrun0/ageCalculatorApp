import styles from "./ResultAge.module.css";

export const ResultAge = () => {
  return (
    <div className={styles.containerResultAge}>
      <p>
        <span>38</span>years
      </p>
      <p>
        <span>10</span>months
      </p>
      <p>
        <span>5</span>days
      </p>
    </div>
  );
};
