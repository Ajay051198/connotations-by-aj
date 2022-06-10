import React, { useRef } from 'react';
import styles from './Home.module.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Home() {
  const contentRef = useRef(null);
  const scrollToBottom = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <div className={styles.slate}>
        <div className={styles.aj}>
          AJ
        </div>
        <div className={styles.slogan}>
          Daring to be present
        </div>        
        <ArrowDownwardIcon className={styles.loadmore} onClick={scrollToBottom}/>
      </div>
      <div className={styles.slate} ref={contentRef}>
        SUP
      </div>
    </div>
  );
}

export default Home;
