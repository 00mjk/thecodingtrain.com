import React, { memo } from 'react';
import cn from 'classnames';

import Button from './Button';

import * as css from './ButtonPanel.module.css';

const ButtonPanel = ({
  text,
  buttonText,
  buttonLink,
  variant,
  className,
  smallWrap
}) => {
  return (
    <div
      className={cn(css.root, className, {
        [css[variant]]: variant,
        [css.smallWrap]: smallWrap
      })}>
      {text && <p>{text}</p>}
      <div className={css.buttonContainer}>
        <Button
          variant={variant}
          {...{ [buttonLink.startsWith('/') ? 'to' : 'href']: buttonLink }}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default memo(ButtonPanel);
