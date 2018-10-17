import React from "react";
import { Grid } from "semantic-ui-react";
import { Button } from "../../Components";
import styles from "./Item.scss";

export default class extends React.Component {
    state = { open: false };
    toggle = () => this.setState({ open: !this.state.open });

    render() {
        const { title, description, index } = this.props;

        const homeImage = (index) => {
            return require(`../../../assets/ic-heimilisvernd${index + 1}.svg`);
        };

        return (
            <Grid
                className={styles.item}
                columns="equal"
            >
                <Grid.Row textAlign="left" centered className={styles.header}>
                    <Grid.Column width={14}>
                        <h3>{title.toUpperCase()}</h3>
                        <div className={styles.divider} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row
                    textAlign="left"
                    centered
                    className={styles.description}
                >
                    <Grid.Column width={14}>
                        <p>{description}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered className={styles.imageWrapper}>
                    <Grid.Column
                        className={styles.image}
                        style={{
                            backgroundImage: `url(${homeImage(index)})`,
                        }}
                        textAlign={"center"}
                        width={14}
                    />
                    <div className={styles.framedButton}>
                        <Button.Framed content={"SKOÐA NÁNAR"} />
                    </div>
                </Grid.Row>
            </Grid>
        );
    }
}
