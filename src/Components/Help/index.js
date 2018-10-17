import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import styles from "./Help.scss"
import { Chat } from "../../../assets"


export default () => {
  return (
    <div className={styles.help}><img src={Chat} alt="Opnunartími" align="middle" /></div>
  );
};
