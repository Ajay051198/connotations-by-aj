import React, { useRef, useState } from 'react';
import styles from './Home.module.scss';

import menuitems from './features/connotationsMenu/menuitems';

// Imported Widgets and Icons
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Our Widget
import ConnotationMenu from './features/connotationsMenu/ConnotationsMenu';
import TravelLog from './features/travelLog/TravelLog';

const Home = () => {
  const contentRef = useRef();

  // States
  const [focused, setFocused] = useState(menuitems.NONE);
  const [showContent, setShowContent] = useState(false);

  // Event Handles || Helper functions
  const scrollToBottom = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderContentComponent = () => {
    switch (focused) {
      case menuitems.TRAVEL:
        return <TravelLog />;
      default:
        return <TravelLog />;
    }
  };

  return (
    <div>
      <div className={styles.slate}>
        <div className={styles.aj}>AJ</div>
        <div className={styles.slogan}>Daring to be present</div>
        <ArrowDownwardIcon className={styles.loadmore} onClick={scrollToBottom} />
      </div>
      <div className={`${styles.content} ${focused !== menuitems.NONE && styles.focus}`} ref={contentRef}>
        <ConnotationMenu focused={focused} setFocused={setFocused} setShowContent={setShowContent} />
        {/* {showContent && <div className={styles.ball}></div>} */}
        {showContent && renderContentComponent()}
      </div>
    </div>
  );
};

export default Home;
