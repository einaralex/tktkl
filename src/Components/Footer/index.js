import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import styles from "./Footer.scss"
import { Chat, Chat2, Clock, Facebook, Mail, Phone, Youtube } from "../../../assets"


export default (props) => {
  const {  } = props;
  
  return (
    <Grid.Row centered className={styles.footer}>
    <Grid.Column width={16}>
        <Grid>
        <Grid.Row centered className={styles.top}>
          <Grid.Column width={10} textAlign='left' verticalAlign='middle'>
            <h4>GETUM VIÐ AÐSTOÐAÐ ÞIG?</h4><br />
               <img src={Clock} alt="Opnunartími" align="middle"/>
               <span>09:00 - 16:30</span>
               <img src={Chat} alt="Netspjall" align="middle" />
               <span>Netspjall</span>
               <img src={Phone} alt="Símanúmer" align="middle" />
               <span>514 1000</span>
               <img src={Mail} alt="Póstur" align="middle" />
               <span>vordur@vordur.is</span>
               <img src={Chat2} alt="Senda fyrirspurn" align="middle" />
               <span>Senda fyrirspurn</span>
             </Grid.Column>
          </Grid.Row>
          <Grid.Row centered className={styles.links}>
            <Grid.Column width={7} >
            <a href='#'>Persónuvernd</a>
            <span className={styles.slashDivider}>/</span>
            <a href='#'>Skilmálar</a>
            <span className={styles.slashDivider}>/</span>
            <a href='#'>Vafrakökur</a>
            <span className={styles.slashDivider}>/</span>
            <a href='#'>Ábendingar, kvartanir og hrós</a>
            </Grid.Column>
          <Grid.Column width={3} className={styles.social}>
            <img src={Facebook} alt="Facebook hlekkur" align="middle" />
               <strong>Facebook</strong>
            <img src={Youtube} alt="Youtube hlekkur" align="middle" />
               <strong>Youtube</strong>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
          <Grid.Column textAlign='center' width={10} className={styles.companyInfo}>
          <span>Vörður Tryggingar hf kt. 441099 - 3399</span>
          <span>Vörður Líftryggingar hf kt. 620166 - 0229</span>
          <span>Borgartún 25, 105 Reykjavík</span>
          </Grid.Column>
            </Grid.Row>
        </Grid>
    </Grid.Column>
  </Grid.Row>
  );
};
