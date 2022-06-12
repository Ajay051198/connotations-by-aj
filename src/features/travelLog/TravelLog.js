import React from 'react';
import styles from './TravelLog.module.scss';
import log from './log';

const TravelLog = () => {
  return (
    <div className={styles.contentContainer}>
      {Object.keys(log).map((destination) => (
        <Destination destination={destination} visited={log[destination]} key={destination} />
      ))}
    </div>
  );
};

const Destination = ({ destination, visited }) => {
  return <div className={styles.destination}>{destination}</div>;
};

export default TravelLog;
