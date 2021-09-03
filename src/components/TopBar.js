import React from 'react';
import Menu from './Menu';

import * as css from './TopBar.module.css';

import Logo from '../images/logo.svg';
import Clock from '../images/clock.svg';

const TopBar = () => {
  return (
    <div className={css.root}>
      <div className={css.logo}>
        <Logo width={250} />
      </div>
      <div className={css.clock}>
        <Clock />
      </div>
      <div className={css.date}>
        <span className={css.longDate}>Sunday / Feb 7th, 2021</span>
        <span className={css.shortDate}>09/07/2021</span>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
