import styles from "../styles/ProjectCard.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function ProjectCard(props) {
  const [status, setStatus] = useState(props.status);

  const handleStatus = async (value) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${props.id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: value }),
        },
      );
      const data = await response.json();
      if (data.result) {
        setStatus(value);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error", error);
      alert("Server error to update project status.");
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.username}>{props.username}</div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.sport}>{props.sportTeam}</div>

      <div className={styles.date}>
        {moment(props.kickOffDate).format("MMM Do YYYY")} <br />
        {props.indus && (
          <span className={styles.indusDate}>
            {moment(props.kickOffIndusDate).format("MMM Do YYYY")}
          </span>
        )}
      </div>

      <div className={styles.date}>
        {moment(props.feasiDate).format("MMM Do YYYY")} <br />
        {props.indus && (
          <span className={styles.indusDate}>
            {moment(props.goIndusDate).format("MMM Do YYYY")}
          </span>
        )}
      </div>
      <div className={styles.date}>
        {moment(props.creaDate).format("MMM Do YYYY")} <br />
        {props.indus && (
          <span className={styles.indusDate}>
            {moment(props.trialRunDate).format("MMM Do YYYY")}
          </span>
        )}
      </div>
      <div className={styles.date}>
        {moment(props.selecDate).format("MMM Do YYYY")} <br />
        {props.indus && (
          <span className={styles.indusDate}>
            {moment(props.pilotRunDate).format("MMM Do YYYY")}
          </span>
        )}
      </div>

      <div className={styles.date}>
        {moment(props.shipDate).format("MMM Do YYYY")} <br />
        {props.indus && (
          <span className={styles.indusDate}>
            {moment(props.goProdDate).format("MMM Do YYYY")}
          </span>
        )}
      </div>

      <select
        className={styles.status}
        type="text"
        value={status}
        onChange={(e) => handleStatus(e.target.value)}
      >
        <option value="">Status</option>
        <option value="Not started">Not started</option>
        <option value="In progress">In progress</option>
        <option value="Finished">Finished</option>
        <option value="Late">Late</option>
      </select>

      <div className={styles.iconBox}>
        <button
          type="button"
          className={styles.btn}
          title="Update project"
          aria-label="Update project"
        >
          <FontAwesomeIcon
            icon={faRotate}
            className={styles.icon}
            onClick={() => props.openModalModify(props)}
          />
        </button>
        <button
          type="button"
          className={styles.btn}
          title="Delete project"
          aria-label="Delete project"
        >
          <FontAwesomeIcon
            icon={faTrash}
            className={styles.icon}
            onClick={() => props.handleDeleteProject(props.id)}
          />
        </button>
      </div>
    </div>
  );
}
