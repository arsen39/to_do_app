import React from 'react';
import styles from "./ErrMsg.module.scss";

const ErrMsg = (props) => {
  const {msg} = props;
  return (
    <div className={styles.errMsg}>
      <p>{msg}</p>
    </div>
  );
}

export default ErrMsg;
