import styles from "../styles/ProjectCard.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function ProjectCard(props) {
  return (
    <div className={styles.content}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.sport}>{props.sportTeam}</div>
      <div className={styles.milestoneBox}>
        <div className={styles.projectLine}>
          <p className={styles.milestoneSection}>Project line </p>
          <span style={{ fontFamily: "Roboto Regular" }}>|</span>

          <div className={styles.milestone}>
            <div className={styles.name}>Kick-off :</div>
            <div className={styles.date}>
              {moment(props.kickOffDate).format("MMM Do YYYY")}
            </div>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>
          </div>
          <div className={styles.milestone}>
            <div className={styles.name}>Feasi OK :</div>
            <div className={styles.date}>
              {moment(props.feasiDate).format("MMM Do YYYY")}
            </div>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>
          </div>
          <div className={styles.milestone}>
            <div className={styles.name}>Crea OK :</div>
            <div className={styles.date}>
              {moment(props.creaDate).format("MMM Do YYYY")}
            </div>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>
          </div>
          <div className={styles.milestone}>
            <div className={styles.name}>Selec OK :</div>
            <div className={styles.date}>
              {moment(props.selecDate).format("MMM Do YYYY")}
            </div>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>
          </div>
          <div className={styles.milestone}>
            <div className={styles.name}>Ship OK :</div>
            <div className={styles.date}>
              {moment(props.shipDate).format("MMM Do YYYY")}
            </div>
          </div>
        </div>
        {props.indus && (
          <div className={styles.indusLine}>
            <p className={styles.milestoneSection}>Indus line </p>
            <span style={{ fontFamily: "Roboto Regular" }}>|</span>

            <div className={styles.milestone}>
              <div className={styles.name}>Kick-off :</div>
              <div className={styles.date}>
                {moment(props.kickOffIndusDate).format("MMM Do YYYY")}
              </div>
              <span style={{ fontFamily: "Roboto Regular" }}>|</span>
            </div>
            <div className={styles.milestone}>
              <div className={styles.name}>Go indus :</div>
              <div className={styles.date}>
                {moment(props.goIndusDate).format("MMM Do YYYY")}
              </div>
              <span style={{ fontFamily: "Roboto Regular" }}>|</span>
            </div>
            <div className={styles.milestone}>
              <div className={styles.name}>Trial run :</div>
              <div className={styles.date}>
                {moment(props.trialRunDate).format("MMM Do YYYY")}
              </div>
              <span style={{ fontFamily: "Roboto Regular" }}>|</span>
            </div>
            <div className={styles.milestone}>
              <div className={styles.name}>Pilot run :</div>
              <div className={styles.date}>
                {moment(props.pilotRunDate).format("MMM Do YYYY")}
              </div>
              <span style={{ fontFamily: "Roboto Regular" }}>|</span>
            </div>
            <div className={styles.milestone}>
              <div className={styles.name}>Go prod :</div>
              <div className={styles.date}>
                {moment(props.goProdDate).format("MMM Do YYYY")}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.iconBox}>
        <FontAwesomeIcon
          icon={faRotate}
          className={styles.icon}
          onClick={() => props.openModalModify(props)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className={styles.icon}
          onClick={() => props.handleDeleteProject(props.id)}
        />
      </div>
    </div>
  );
}
