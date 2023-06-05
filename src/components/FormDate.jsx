import styles from "./FormDate.module.css";

import arrowDown from "../../src/assets/arrowDown.svg";
import { ResultAge } from "./ResultAge";
import { useState } from "react";

const FormDate = () => {
  const [dayInput, setDayInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [yearInput, setYearInput] = useState(1998);

  const [dayResult, setDayResult] = useState("");
  const [monthResult, setMonthResult] = useState("");
  const [yearResult, setYearResult] = useState("");

  const dataAtual = new Date();

  const day = dataAtual.getDate();
  const month = dataAtual.getMonth() + 1;
  const year = dataAtual.getFullYear();

  function validarData(dia, mes, ano) {
    if (mes < 1 || mes > 12) {
      return false;
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dia < 1 || dia > diasPorMes[mes - 1]) {
      return false;
    }

    if (ano > year) {
      return false;
    }

    return true;
  }

  function calcAge() {
    let dayInputFloat = Number(dayInput);
    let monthInputFloat = Number(monthInput);
    let yearInputFloat = Number(yearInput);

    let resultYear = year - yearInput;
    let resultMonth = month - monthInput;

    if (!validarData(dayInputFloat, monthInputFloat, yearInputFloat)) {
      // Lida com a situação de data inválida
      console.log("Data de entrada inválida!");
      return;
    }

    if (dayInputFloat === day && monthInputFloat === month) {
      setDayResult(day);
      setMonthResult(0);
      setYearResult(resultYear);
      console.log("Parabéns");
    } else if (dayInputFloat < day && monthInputFloat === month) {
      setDayResult(day);
      setMonthResult(0);
      setYearResult(resultYear);
    } else if (monthInputFloat < month) {
      setDayResult(day);
      setMonthResult(resultMonth);
      setYearResult(resultYear);
    } else {
      setDayResult(day);
      setMonthResult(resultMonth + 12);
      setYearResult(resultYear - 1);
    }
  }

  return (
    <div className={styles.containerFormData}>
      <form onSubmit={calcAge} className={styles.form}>
        <label className={styles.label}>
          Day
          <input
            className={styles.inputDate}
            type="number"
            value={dayInput}
            placeholder="DD"
            onChange={(e) => setDayInput(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Month
          <input
            className={styles.inputDate}
            type="number"
            value={monthInput}
            placeholder="MM"
            onChange={(e) => setMonthInput(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Year
          <input
            className={styles.inputDate}
            type="number"
            value={yearInput}
            placeholder="YYYY"
            onChange={(e) => setYearInput(e.target.value)}
          />
        </label>
      </form>

      <div className={styles.containerBtn}>
        <button onClick={calcAge} className={styles.btnCalc}>
          <img src={arrowDown} alt="" />
        </button>
      </div>

      <ResultAge
        dayResult={dayResult}
        monthResult={monthResult}
        yearResult={yearResult}
      />
    </div>
  );
};
export default FormDate;
