import React from 'react';

import styles from './index.module.css';

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.modaldarker}>
        <div className={styles.loader}> </div>
      </div>
    </div>
  );
}

export default Loader;
