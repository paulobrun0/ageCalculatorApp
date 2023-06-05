import styles from "./FormDate.module.css";
import audioFile from "../../src/assets/parabens.mp3";
import arrowDown from "../../src/assets/arrowDown.svg";
import { ResultAge } from "./ResultAge";
import { useState, useEffect } from "react";

const FormDate = () => {
  const [dayInput, setDayInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [yearInput, setYearInput] = useState("");

  const [dayResult, setDayResult] = useState("- -");
  const [monthResult, setMonthResult] = useState("- -");
  const [yearResult, setYearResult] = useState("- -");

  const [playAudio, setPlayAudio] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [formErrors, setFormErrors] = useState({
    dayError: "",
    monthError: "",
    yearError: "",
  });

  const dataAtual = new Date();

  const day = dataAtual.getDate();
  const month = dataAtual.getMonth() + 1;
  const year = dataAtual.getFullYear();

  function isValidDate(dia, mes, ano) {
    if (mes < 1 || mes > 12) {
      return false;
    }

    const diasPorMes = {
      1: 31, // Janeiro
      2: ano % 4 === 0 ? 29 : 28, // Fevereiro (considerando anos bissextos)
      3: 31, // Março
      4: 30, // Abril
      5: 31, // Maio
      6: 30, // Junho
      7: 31, // Julho
      8: 31, // Agosto
      9: 30, // Setembro
      10: 31, // Outubro
      11: 30, // Novembro
      12: 31, // Dezembro
    };

    if (dia < 1 || dia > diasPorMes[mes]) {
      return false;
    }

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    if (ano > anoAtual) {
      return false;
    }

    return true;
  }

  function calcAge() {
    const dayInputInt = parseInt(dayInput);
    const monthInputInt = parseInt(monthInput);
    const yearInputInt = parseInt(yearInput);

    // Verificar campos obrigatórios
    if (!dayInput || !monthInput || !yearInput) {
      setFormErrors({
        dayError: !dayInput ? "This field is required" : "",
        monthError: !monthInput ? "This field is required" : "",
        yearError: !yearInput ? "This field is required" : "",
      });
      setShowErrors(true);
      return;
    }

    // Verificar campos inválidos
    let errors = {
      dayError: "",
      monthError: "",
      yearError: "",
    };

    if (!isValidDate(dayInputInt, monthInputInt, yearInputInt)) {
      if (dayInputInt < 1 || dayInputInt > 31) {
        errors.dayError = "Must be a valid day";
      }
      if (monthInputInt < 1 || monthInputInt > 12) {
        errors.monthError = "Must be a valid month";
      }
      if (yearInputInt >= year) {
        errors.yearError = "Must be in the past";
      } else if (yearInputInt < 0) {
        errors.yearError = "Must be a valid year";
      }
      if (
        dayInputInt > 0 &&
        dayInputInt <= 31 &&
        monthInputInt > 0 &&
        monthInputInt <= 12
      ) {
        const diasPorMes = {
          1: 31, // Janeiro
          2: yearInputInt % 4 === 0 ? 29 : 28, // Fevereiro (considerando anos bissextos)
          3: 31, // Março
          4: 30, // Abril
          5: 31, // Maio
          6: 30, // Junho
          7: 31, // Julho
          8: 31, // Agosto
          9: 30, // Setembro
          10: 31, // Outubro
          11: 30, // Novembro
          12: 31, // Dezembro
        };
        if (dayInputInt > diasPorMes[monthInputInt]) {
          errors.dayError = "Must be a valid day";
        }
      }
    }

    setFormErrors(errors);
    setShowErrors(true);

    if (errors.dayError || errors.monthError || errors.yearError) {
      return;
    }

    // Cálculos de idade
    let resultYear = year - yearInputInt;
    let resultMonth = month - monthInputInt;

    if (dayInputInt === day && monthInputInt === month) {
      setDayResult(day);
      setMonthResult(0);
      setYearResult(resultYear);
      setPlayAudio(true);
      console.log("Parabéns");
    } else if (dayInputInt < day && monthInputInt === month) {
      setDayResult(day);
      setMonthResult(0);
      setYearResult(resultYear);
    } else if (monthInputInt < month) {
      setDayResult(day);
      setMonthResult(resultMonth);
      setYearResult(resultYear);
    } else {
      setDayResult(day);
      setMonthResult(resultMonth + 12);
      setYearResult(resultYear - 1);
    }
  }

  useEffect(() => {
    if (playAudio) {
      const audio = new Audio(audioFile);
      audio.play();

      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 15390);
    }
  }, [playAudio]);

  return (
    <div className={styles.containerFormData}>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label
            className={`${styles.label} ${
              formErrors.dayError && styles.invalidLabel
            }`}
          >
            Day
            <input
              className={`${
                formErrors.dayError
                  ? `${styles.inputDateInvalid}`
                  : `${styles.inputDate}`
              }`}
              type="number"
              value={dayInput}
              placeholder="DD"
              onChange={(e) => setDayInput(e.target.value)}
            />
          </label>
          {showErrors && formErrors.dayError && (
            <p className={styles.errorMessage}>{formErrors.dayError}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <label
            className={`${styles.label} ${
              formErrors.monthError && styles.invalidLabel
            }`}
          >
            Month
            <input
              className={`${
                formErrors.monthError
                  ? `${styles.inputDateInvalid}`
                  : `${styles.inputDate}`
              }`}
              type="number"
              value={monthInput}
              placeholder="MM"
              onChange={(e) => setMonthInput(e.target.value)}
            />
          </label>
          {showErrors && formErrors.monthError && (
            <p className={styles.errorMessage}>{formErrors.monthError}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <label
            className={`${styles.label} ${
              formErrors.yearError && styles.invalidLabel
            }`}
          >
            Year
            <input
              className={`${
                formErrors.yearError
                  ? `${styles.inputDateInvalid}`
                  : `${styles.inputDate}`
              }`}
              type="number"
              value={yearInput}
              placeholder="YYYY"
              onChange={(e) => setYearInput(e.target.value)}
            />
          </label>
          {showErrors && formErrors.yearError && (
            <p className={styles.errorMessage}>{formErrors.yearError}</p>
          )}
        </div>
      </form>

      <div className={styles.containerBtn}>
        <button onClick={calcAge} className={styles.btnCalc}>
          <img src={arrowDown} alt="Arrow Down" />
        </button>
      </div>

      <div className={styles.resultAgeContainer}>
        <ResultAge
          dayResult={dayResult}
          monthResult={monthResult}
          yearResult={yearResult}
        />
      </div>
    </div>
  );
};

export default FormDate;
