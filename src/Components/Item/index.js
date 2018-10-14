import React from "react";
import { Grid, Statistic } from "semantic-ui-react";
import { Label } from "../../Components";
import styles from "./Item.scss";

export default class extends React.Component {
    state = { open: false };
    toggle = () => this.setState({ open: !this.state.open });

    render() {
        const { title, description, index } = this.props;
        const { open } = this.state;

        const homeImage = (index) => {
            return require(`../../../assets/ic-heimilisvernd${index + 1}.svg`);
        };

        return (
            <Grid
                className={styles.item}
                columns="equal"
                onClick={() => this.toggle()}
                verticalAlign="middle"
            >
                <Grid.Row>
                    <Grid.Column>
                        <h2>{title}</h2>
                    </Grid.Column>
                </Grid.Row>
                <div className={styles.divider} />
                <Grid.Row>
                    <Grid.Column>
                        <p>{description}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered className={styles.imageWrapper}>
                    <Grid.Column
                        
                        className={styles.image}
                        style={{
                            backgroundImage: `url(${homeImage(index)})`,
                        }}
                        textAlign={'center'}
                    >
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
