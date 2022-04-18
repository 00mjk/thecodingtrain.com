import React, { memo } from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';

import Image from './Image';
import Play from '../images/play.svg';

import * as css from './VideoCard.module.css';

export const VideoCardList = memo(({ children, id, className, variant }) => (
  <div id={id} className={cn(css.list, className)}>
    {children}
    {children.length % 2 !== 0 && (
      <div className={cn(css.listSpacer, css[variant])} />
    )}
  </div>
));

const VideoCard = ({
  title,
  slug,
  link,
  meta,
  icon = '👁',
  description,
  image,
  variant
}) => {
  return (
    <div className={cn(css.root, css[variant])}>
      <div className={css.block}>
        <div className={css.top}>
          <div className={css.icon}>{icon}</div>
          <h5>
            {link ? <a href={link}>{title}</a> : <Link to={slug}>{title}</Link>}
          </h5>
        </div>
        <div className={css.bottom}>
          <div className={css.left}>
            <p className={css.description}>{description}</p>
            {link ? (
              <a className={css.meta} href={link}>
                <span>{meta}</span>
                <Play className={css.play} />
              </a>
            ) : (
              <Link to={slug} className={css.meta}>
                <span>{meta}</span>
                <Play className={css.play} />
              </Link>
            )}
          </div>
          <div className={css.right}>
            <Image image={image} imgClassName={css.img} />
          </div>
        </div>
      </div>
      <div className={css.gap} />
    </div>
  );
};

export default memo(VideoCard);
