import React from "react";
import { Button } from "semantic-ui-react";
import styles from "./Button.scss"

export default class extends React.Component {
  static NoBorder = (props) => (
    <Button content={props.value} className={styles.noBorder} {...props}/>
  );
  static Boxed = (props) => (
    <Button
      content={props.value}
      className={styles.boxed}
      {...props}
    />
  );
  static Framed = (props) => (
    <Button content={props.value} className={styles.framed} {...props}/> 
  )

  render() {
    return <Button {...this.props} />;
  }
}
