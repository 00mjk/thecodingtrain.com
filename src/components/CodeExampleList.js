import React, { memo } from 'react';
import cn from 'classnames';

import * as css from './CodeExampleList.module.css';

import NodeIcon from '../images/node-icon.svg';
import P5Icon from '../images/p5js-icon.svg';
import ProcessingLogo from '../images/processing-icon.svg';

const icons = {
  p5js: () => <P5Icon className={css.p5} />,
  node: () => <NodeIcon className={css.node} />,
  processing: () => <ProcessingLogo className={css.processing} />
};

const CodeExampleList = memo(({ className, variant, examples }) => {
  return (
    <ul className={cn(css.root, className, { [css[variant]]: variant })}>
      {examples.map((example, key) => {
        const Icon =
          example.language in icons ? icons[example.language] : () => null;

        const linkProps = {
          href: example.editorUrl,
          title: 'Open in web editor',
          target: '_blank',
          rel: 'noreferrer'
        };

        return (
          <li className={css.example} key={key}>
            <span className={css.thumbnail}>
              <a {...linkProps}>
                {example.image && (
                  <img
                    alt={`Thumbnail for ${example.title} code example`}
                    src={example.image}
                  />
                )}
              </a>
            </span>
            <span className={css.info}>
              <a {...linkProps}>
                <span className={css.title}> {example.title}</span>
                {example.description && (
                  <span className={css.description}>{example.description}</span>
                )}
              </a>
            </span>
            <span className={css.icon}>
              <a {...linkProps}>
                <Icon />
              </a>
            </span>
            <div className={css.links}>
              <a
                className={css.linkIcon}
                href={example.githubUrl}
                target="_blank"
                rel="noreferrer"
                title="View source code">
                📒
              </a>
              <a
                className={css.linkIcon}
                href={example.codeUrl}
                target="_blank"
                rel="noreferrer"
                title="Download code as zip">
                💾
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
});

export default CodeExampleList;
