import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.css';

function Card({ justHundred, children }) {
  return (
    <div
      className={classnames(styles.card, {
        [styles.cardtophundred]: justHundred,
      })}
    >
      {children}
    </div>
  );
}
Card.propTypes = {
  justHundred: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
export default Card;
