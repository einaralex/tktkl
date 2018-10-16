import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import styles from "./Footer.scss"


export default (props) => {
  const {  } = props;
  
  return (
    <Grid.Row centered className={styles.footer}>
    <Grid.Column width={16}>
        <Grid>
        <Grid.Row centered className={styles.top}>
          <Grid.Column width={11} textAlign='left' verticalAlign='middle'>
            <h4>GETUM VIÐ AÐSTOÐAÐ ÞIG?</h4><br />
               <i></i>
               <span>09:00 - 16:30</span>
               <i></i>
               <span>Netspjall</span>
               <i></i>
               <span>514 1000</span>
               <i></i>
               <span>vordur@vordur.is</span>
               <i></i>
               <span>Senda fyrirspurn</span>
             </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>            
            <Grid.Column width={7} >
            <span>Persónuvernd</span>
            <span>Skilmálar</span>
            <span>Vafrakökur</span>
            <span>Ábendingar, kvartanir og hrós</span>
            </Grid.Column>
          <Grid.Column width={4} >
          <span>Facebook</span>
            <span>Youtube</span>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
          <Grid.Column width={11} >
          <span>Vörður Tryggingar hf kt. 441099 - 3399  Vörður Líftryggingar hf kt. 620166 - 0229</span>
            <span>Borgartún 25, 105 Reykjavík</span>
          </Grid.Column>
            </Grid.Row>
        </Grid>
    </Grid.Column>
  </Grid.Row>
  );
};
