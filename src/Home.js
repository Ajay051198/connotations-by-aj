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
        <div>
          <div className={styles.menuitem}>NEW PHONE WHO DIS</div>
          <div className={styles.menuitem}>TRAVEL LOGS</div>
          <div className={styles.menuitem}>BOOK LOGS</div>
          <div className={styles.menuitem}>BLOG</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
