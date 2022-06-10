import React from 'react';
import styles from './Home.module.scss';

function Home() {
  return (
    <div>
      <div className={styles.slate}>
        <div className={styles.aj}>
          AJ
        </div>
        <div className={styles.slogan}>
          Daring to be present
        </div>
      </div>
    </div>
  );
}

export default Home;
