import React from "react";
import { Grid, Menu, GridColumn } from "semantic-ui-react";
import Button from "../Button";
import Logo from "../../../assets/logo.png";
import styles from "./Header.scss";

export default class extends React.Component {
    state = { activeTab: "EINSTAKLINGUR"};
    
    switchTab = ({ content }) => this.setState({ activeTab: content });
    static Search = (props) => 
        <Grid.Row  className={`${styles.search} ${props.show ? '' : styles.hide}`}/>;

    static Image = () => 
        <Grid.Row  className={styles.image}/>;

    // gera wrapper fyrir main content widthfix
    render() {
        const { navigation, openSearch } = this.props;
        const { activeTab } = this.state;
        return (
            <Grid.Row centered className={styles.headerWrapper} verticalAlign="bottom">
                <Grid.Column width={11}>
                    <Grid>
                        <Grid.Row className={styles.header}>
                            <Grid.Column width={8}>
                                <Menu pointing secondary>
                                    <div className={styles.logo}>
                                        <img
                                            src={Logo}
                                            alt="Vörður"
                                            align="middle"
                                        />
                                    </div>
                                    {navigation.map((item) => 
                                            <Menu.Item
                                                active={
                                                    activeTab ===
                                                    item.toUpperCase()
                                                }
                                                key={item}
                                                content={item.toUpperCase()}
                                                onClick={(_, item) =>
                                                    this.switchTab(item)
                                                }
                                            />
                                    )}
                                </Menu>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Button.NoBorder
                                    icon="lock"
                                    value="Mínar síður"
                                />
                                <Button.NoBorder icon="search" value="Leita" onClick={() => this.props.toggle(openSearch)}/>
                                <Button.Boxed
                                    icon="lightning"
                                    color="yellow"
                                    value="TILKYNNA TJÓN"
                                />
                                <Button.Boxed value="FÁ TILBOÐ" color="blue" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        );
    }
}
