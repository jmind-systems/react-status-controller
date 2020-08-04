import * as React from 'react';
import * as PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import { colors } from 'constants';

import * as styles from './style';

type Props = {
  size?: number;
  color?: string;
  styles?: object;
}

export const Loader: React.FC<Props> = ({ styles: customStyles, color, size }) => (
  <div className={css(styles.root(customStyles)._)} data-testid="loader">
    <div className={css(styles.ldsEllipsis(size)._)}>
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <div key={index} className={css(styles.ellipsisChild(size, color)._)} />
        ))}
    </div>
  </div>
);

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

Loader.defaultProps = {
  size: 8,
  color: colors.blue,
  styles: {}
};
