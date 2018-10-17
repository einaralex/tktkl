import React from "react";
import { Footer, Header, Help, Main } from "../../Components";
import { navigation, options } from "../../../assets/data.json";
import { Grid } from "semantic-ui-react";
import styles from "./App.scss";

export default class extends React.Component {
    state = { searchOpen: false };

    toggleSearch = (searchOpen) => {
        return this.setState({ searchOpen: !searchOpen });
    };
    render() {
        return (
            <Grid className={styles.app}>
                <Header.Search show={this.state.searchOpen} />
                <Header
                    toggle={this.toggleSearch}
                    openSearch={this.state.searchOpen}
                    navigation={navigation}
                />
                <Header.Image />
                <Main>
                    <Main.Header />
                    <Main.Options options={options} />
                </Main>
                <Footer />
                <Help />
            </Grid>
        );
    }
}
