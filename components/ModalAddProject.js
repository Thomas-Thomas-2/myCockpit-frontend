import { useEffect, useState } from "react";
import styles from "../styles/ModalAddProject.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalAddProject({ onClose, handleAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sportTeam, setSportTeam] = useState("");
  //   const [productEngineer, setProductEngineer] = useState("");
  const [kickOff, setKickOff] = useState("");
  const [feasiOk, setFeasiOk] = useState("");
  const [creaOk, setCreaOk] = useState("");
  const [selectionOk, setSelectionOk] = useState("");
  const [shipmentOk, setShipmentOk] = useState("");
  const [industrialisation, setIndustrialisation] = useState(false);
  const [kickOffIndus, setKickOffIndus] = useState("");
  const [goIndus, setGoIndus] = useState("");
  const [trialRun, setTrialRun] = useState("");
  const [pilotRun, setPilotRun] = useState("");
  const [goProd, setGoProd] = useState("");

  const handleClick = () => {
    if (
      !title ||
      !sportTeam ||
      !kickOff ||
      !feasiOk ||
      !creaOk ||
      !selectionOk ||
      !shipmentOk
    ) {
      alert("Input data missing.");
    } else {
      const projectData = {
        title,
        sportTeam,
        description,
        kickOff,
        feasiOk,
        creaOk,
        selectionOk,
        shipmentOk,
        industrialisation,
        kickOffIndus,
        goIndus,
        trialRun,
        pilotRun,
        goProd,
      };
      handleAddProject(projectData);
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <h2 className={styles.titleModal}>Add a project</h2>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.close}
            onClick={onClose}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.topBlock}>
            <input
              className={styles.input}
              type="text"
              placeholder="Project name"
              maxLength="20"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Sport team"
              maxLength="15"
              value={sportTeam}
              onChange={(e) => setSportTeam(e.target.value)}
            />
          </div>
          <div className={styles.middleBlock}>
            <input
              className={styles.input}
              type="text"
              placeholder="Project description"
              maxLength="70"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.indusBlock}>
            <h2 className={styles.subtitle}>
              Will you lead the industrialisation phase ?
            </h2>
            <select
              className={styles.selectList}
              type="text"
              value={industrialisation}
              onChange={(e) => setIndustrialisation(e.target.value)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className={styles.bottomBlock}>
            <div className={styles.projectSection}>
              <h2 className={styles.subtitle}>PROJECT MILESTONES</h2>
              <label className={styles.legend}>
                Kick-off :
                <input
                  className={styles.input}
                  type="date"
                  value={kickOff}
                  onChange={(e) => setKickOff(e.target.value)}
                />
              </label>
              <label className={styles.legend}>
                Feasibility OK :
                <input
                  className={styles.input}
                  type="date"
                  value={feasiOk}
                  onChange={(e) => setFeasiOk(e.target.value)}
                />
              </label>
              <label className={styles.legend}>
                Creation OK :
                <input
                  className={styles.input}
                  type="date"
                  value={creaOk}
                  onChange={(e) => setCreaOk(e.target.value)}
                />
              </label>
              <label className={styles.legend}>
                Selection OK :
                <input
                  className={styles.input}
                  type="date"
                  value={selectionOk}
                  onChange={(e) => setSelectionOk(e.target.value)}
                />
              </label>
              <label className={styles.legend}>
                Shipment OK :
                <input
                  className={styles.input}
                  type="date"
                  value={shipmentOk}
                  onChange={(e) => setShipmentOk(e.target.value)}
                />
              </label>
            </div>
            {industrialisation && (
              <div className={styles.indusSection}>
                <h2 className={styles.subtitle}>INDUS MILESTONES</h2>
                <label className={styles.legend}>
                  Kick-Off indus :
                  <input
                    className={styles.input}
                    type="date"
                    value={kickOffIndus}
                    onChange={(e) => setKickOffIndus(e.target.value)}
                  />
                </label>
                <label className={styles.legend}>
                  Go Indus :
                  <input
                    className={styles.input}
                    type="date"
                    value={goIndus}
                    onChange={(e) => setGoIndus(e.target.value)}
                  />
                </label>
                <label className={styles.legend}>
                  Trial run :
                  <input
                    className={styles.input}
                    type="date"
                    value={trialRun}
                    onChange={(e) => setTrialRun(e.target.value)}
                  />
                </label>
                <label className={styles.legend}>
                  Pilot run :
                  <input
                    className={styles.input}
                    type="date"
                    value={pilotRun}
                    onChange={(e) => setPilotRun(e.target.value)}
                  />
                </label>
                <label className={styles.legend}>
                  Go Prod :
                  <input
                    className={styles.input}
                    type="date"
                    value={goProd}
                    onChange={(e) => setGoProd(e.target.value)}
                  />
                </label>
              </div>
            )}
          </div>

          <button className={styles.btn} onClick={() => handleClick()}>
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
