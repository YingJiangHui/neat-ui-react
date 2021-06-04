import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import withDefaults from '@/utils/withDefaults';
import Loading from './loading';
import classnames from '@/shared/classnames';

type LoadingContainerProps = {
  indicator?: React.ReactNode;
  loading?: boolean;
};
const defaultProps: LoadingContainerProps = {
  indicator: <Loading />,
  loading: false,
};
type Props = PropsWithChildren<
  typeof defaultProps & LoadingContainerProps & HTMLAttributes<any>
>;
const LoadingContainer: FC<PropsWithChildren<Props>> = ({
  loading,
  indicator,
  children,
  ...rest
}) => {
  return (
    <div className="loading-container-wrapper">
      {loading && <div className="loading-mask">{indicator}</div>}
      <div
        className={classnames('loading-container', loading && 'loading-blur')}
        {...rest}
      >
        {children}
      </div>
      <style jsx>{`
        .loading-container-wrapper {
          position: relative;
        }

        .loading-mask {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loading-container {
          transition: opacity 0.25s;
        }

        .loading-blur {
          opacity: 0.5;
        }

        .loading-blur::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          transition: all 0.25s;
          z-index: 10;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};
export default withDefaults(LoadingContainer, defaultProps);