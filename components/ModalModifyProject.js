import { useEffect, useState } from "react";
import styles from "../styles/ModalModifyProject.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function ModalModifyProject({
  onClose,
  handlePatchProject,
  projectData,
}) {
  const [title, setTitle] = useState(projectData.title);
  const [description, setDescription] = useState(projectData.description);
  const [sportTeam, setSportTeam] = useState(projectData.sportTeam);
  //   const [productEngineer, setProductEngineer] = useState("");
  const [kickOff, setKickOff] = useState(
    projectData.kickOffDate
      ? moment(projectData.kickOffDate).format("YYYY-MM-DD")
      : "",
  );
  const [feasiOk, setFeasiOk] = useState(
    projectData.feasiDate
      ? moment(projectData.feasiDate).format("YYYY-MM-DD")
      : "",
  );
  const [creaOk, setCreaOk] = useState(
    projectData.creaDate
      ? moment(projectData.creaDate).format("YYYY-MM-DD")
      : "",
  );
  const [selectionOk, setSelectionOk] = useState(
    projectData.selecDate
      ? moment(projectData.selecDate).format("YYYY-MM-DD")
      : "",
  );
  const [shipmentOk, setShipmentOk] = useState(
    projectData.shipDate
      ? moment(projectData.shipDate).format("YYYY-MM-DD")
      : "",
  );
  const [industrialisation, setIndustrialisation] = useState(projectData.indus);
  const [kickOffIndus, setKickOffIndus] = useState(
    projectData.kickOffIndusDate
      ? moment(projectData.kickOffIndusDate).format("YYYY-MM-DD")
      : "",
  );
  const [goIndus, setGoIndus] = useState(
    projectData.goIndusDate
      ? moment(projectData.goIndusDate).format("YYYY-MM-DD")
      : "",
  );
  const [trialRun, setTrialRun] = useState(
    projectData.trialRunDate
      ? moment(projectData.trialRunDate).format("YYYY-MM-DD")
      : "",
  );
  const [pilotRun, setPilotRun] = useState(
    projectData.pilotRunDate
      ? moment(projectData.pilotRunDate).format("YYYY-MM-DD")
      : "",
  );
  const [goProd, setGoProd] = useState(
    projectData.goProdDate
      ? moment(projectData.goProdDate).format("YYYY-MM-DD")
      : "",
  );

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
      const projectInformation = {
        id: projectData.id,
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
      handlePatchProject(projectInformation);
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top}>
          <h2 className={styles.titleModal}>Modify a project</h2>
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
            Modify project
          </button>
        </div>
      </div>
    </div>
  );
}
