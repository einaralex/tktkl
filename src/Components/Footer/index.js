import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import styles from "./Footer.scss"


export default (props) => {
  const { navigation } = props;
  
  return (
    <Grid.Row centered className={styles.footer}>
    <Grid.Column width={11}>
        <Grid>
          <Grid.Row>
            <Grid.Column width='8'>
            <Menu pointing secondary borderless>
              {navigation.map(n => <Menu.Item>{n.toUpperCase()}</Menu.Item>)}
            </Menu>
            </Grid.Column>
            <Grid.Column width='8' textAlign='right'>
              <span>Þjónustusími</span><br/>
              <span>5141000</span>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >            
            <Grid.Column width='8'>
              <span>Vörður tryggingar hf</span><br/>
              <span>Kt. 441099-3399</span><br/>
              <span>Vörður Líf Kt. 620166-0229</span>
            </Grid.Column>
            <Grid.Column width='8' textAlign='right'>
              <span>Opnunartími</span><br/>
              <span>9:00 - 16:30</span>
            </Grid.Column>
            </Grid.Row>
          <Grid.Row>
            <span>Borgartúni 25, 105 Reykjavík</span><br/>
            <span>vordur@vordur.is</span>
          </Grid.Row>
          <Grid.Row>
            <span>Facebook</span><br/>
            <span>Youtube</span>
            </Grid.Row>
        </Grid>
    </Grid.Column>
  </Grid.Row>
  );
};
