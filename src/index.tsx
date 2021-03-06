import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Statuses } from 'types';
import { defaultReduxStatuses } from 'constants';
import { Loader } from 'components/Loader';


type Props = {
  children: any;
  statuses: Array<string>;
  reduxStatuses?: Statuses;
  loaderSettings: {
    size: number;
    styles: object;
    color: string;
  } | {}
  Loader?: React.FC<any>;
  error?: Function;
}

export const StatusController: React.FC<Props> = React.memo(({ statuses, error, reduxStatuses, children, loaderSettings, Loader }: Props) => {
  const isSuccess = statuses.every(item => item === reduxStatuses.success  );
  const isError = statuses.some(item => item === reduxStatuses.error);
  const isLoading = statuses.some(item => item === reduxStatuses.loading) && !isError;
  const errorJSX = React.useMemo(() => error?.(), [isError, error]);
  const content = React.useCallback(() => typeof children === 'function' ? children() : children,[children])
  return (
    <React.Fragment>
      {isSuccess && content()}
      {isError && errorJSX}
      {isLoading && <Loader {...loaderSettings} />}
    </React.Fragment>
  );
})

StatusController.propTypes = {
  children: PropTypes.any.isRequired,
  statuses: PropTypes.arrayOf(PropTypes.string).isRequired,
  reduxStatuses: PropTypes.any,
  loaderSettings: PropTypes.any,
  error: PropTypes.func
}

StatusController.defaultProps = {
  reduxStatuses: defaultReduxStatuses,
  Loader: Loader,
  loaderSettings: {}
}
