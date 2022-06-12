import React from 'react';
import styles from './ConnotationsMenu.module.scss';
import menuitems from './menuitems.js';

const ConnotationMenu = ({ focused, setFocused, setShowContent }) => {
  const focusMenuItem = (item) => () => {
    setFocused(item);
    setTimeout(() => setShowContent(true), 1000);
  };

  const getMenuItemClass = (item) => {
    if (focused !== menuitems.NONE) {
      if (focused !== item) return `${styles.menuitem} ${styles.focus} ${styles.hide}`;
      return `${styles.menuitem} ${styles.focus}`;
    }
    return `${styles.menuitem}`;
  };

  return (
    <div className={`${styles.centeritem} ${styles.menu} ${focused !== menuitems.NONE && styles.focus}`}>
      <div>
        <div className={getMenuItemClass(menuitems.ABOUT)} onClick={focusMenuItem(menuitems.ABOUT)}>
          NEW PHONE WHO DIS
        </div>
        <div className={getMenuItemClass(menuitems.TRAVEL)} onClick={focusMenuItem(menuitems.TRAVEL)}>
          TRAVEL LOGS
        </div>
        <div className={getMenuItemClass(menuitems.BOOK)} onClick={focusMenuItem(menuitems.BOOK)}>
          BOOK LOGS
        </div>
        <div className={getMenuItemClass(menuitems.BLOG)} onClick={focusMenuItem(menuitems.BLOG)}>
          BLOG
        </div>
      </div>
    </div>
  );
};

export default ConnotationMenu;
