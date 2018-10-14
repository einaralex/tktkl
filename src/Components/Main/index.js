import React from "react";
import { Grid } from "semantic-ui-react";
import { Button, Item, Paper } from "../../Components";
import styles from "./Main.scss";

export default class extends React.Component {
    static Header = () => (
        <Grid>
            <Grid.Column width="16">
                <h2>FJÖLSKYLDAN OG HEIMILIÐ</h2>
            </Grid.Column>
            <Grid.Column className={styles.largeParagraph} width="16">
                <p>Fjölskyldan er það mikilvægasta sem við eigum. Þess vegna viljum við búa henni öruggt umhverfi, þar sem við eigum okkur skjól saman.</p>
            </Grid.Column>
            <Grid.Column width="16">
                <p>Þar komum við hjá Verði til aðstoðar. Við hjálpum þér að tryggja fjölskylduna og heimilið fyrir öllum þessum ,,hvað ef” uppákomum sem lífið getur rétt okkur þegar við eigum þess síst von.</p>
            </Grid.Column>
        </Grid>
    );

    /* Heimilivernd panel */
    static Options = ({ options }) => (
        <Grid.Row>
            {options.map((opt, i) => ( 
                <Grid.Column key={i} width="4">
                    <Paper>
                        <Item title={opt.title} description={opt.description} index={i} />
                    </Paper>
                </Grid.Column>
            ))}
        </Grid.Row>
    );
    render() {
        return (
            <Grid.Row centered className={styles.main}>
                <Grid.Column width={11}>
                    {this.props.children.map((child, i) => (
                        <Grid key={i}>{child}</Grid>
                    ))}
                </Grid.Column>
            </Grid.Row>
        );
    }
}