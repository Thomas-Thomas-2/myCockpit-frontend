import styles from "../styles/ProjectCard.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard(props) {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <div className={styles.content}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.sport}>{props.sport}</div>
      <div className={styles.milestoneBox}>
        <div className={styles.projectLine}>
          <p className={styles.milestoneSection}>Project line </p>
          <span style={{ fontFamily: "Roboto Regular" }}>|</span>

          <div className={styles.milestone}>
            <div className={styles.name}>Kick-off :</div>
            <div className={styles.date}>{props.kickOffDate}</div>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>
          </div>
          <div className={styles.milestone}>
            <div className={styles.name}>Feasi OK :</div>
            <div className={styles.date}>{props.feasiDate}</div>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>
          </div>
          <div className={styles.milestone}>
            <div className={styles.name}>Crea OK :</div>
            <div className={styles.date}>{props.feasiDate}</div>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>
          </div>
          <div className={styles.milestone}>
            <div className={styles.name}>Selec OK :</div>
            <div className={styles.date}>{props.selecDate}</div>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>
          </div>
          <div className={styles.milestone}>
            <div className={styles.name}>Ship OK :</div>
            <div className={styles.date}>{props.shipDate}</div>
          </div>
        </div>
        {props.indus && (
          <div className={styles.indusLine}>
            <p className={styles.milestoneSection}>Indus line </p>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>

            <div className={styles.milestone}>
              <div className={styles.name}>Kick-off :</div>
              <div className={styles.date}>{props.kickOffIndusDate}</div>
              <span style={{ fontFamily: "Roboto Regular" }}>|</span>
            </div>
            <div className={styles.milestone}>
              <div className={styles.name}>Go indus :</div>
              <div className={styles.date}>{props.goIndusDate}</div>
              <span style={{ fontFamily: "Roboto Regular" }}>|</span>
            </div>
            <div className={styles.milestone}>
              <div className={styles.name}>Trial run :</div>
              <div className={styles.date}>{props.trialRunDate}</div>
              <span style={{ fontFamily: "Roboto Regular" }}>|</span>
            </div>
            <div className={styles.milestone}>
              <div className={styles.name}>Pilot run :</div>
              <div className={styles.date}>{props.pilotRunDate}</div>
              <span style={{ fontFamily: "Roboto Regular" }}>|</span>
            </div>
            <div className={styles.milestone}>
              <div className={styles.name}>Go prod :</div>
              <div className={styles.date}>{props.goProdDate}</div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.iconBox}>
        <FontAwesomeIcon
          icon={faRotate}
          className={styles.icon}
          // onClick={() => setShowPwdSignup(false)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className={styles.icon}
          // onClick={() => setShowPwdSignup(false)}
        />
      </div>
    </div>
  );
}
