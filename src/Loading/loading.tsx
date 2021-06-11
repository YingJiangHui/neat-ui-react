import React, { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react';
import withDefaults from '@/utils/with-defaults';
import LoadingContainer from '@/Loading/loading-container';
import { useTheme } from '@/hooks/use-theme';

type LoadingProps = {
  size?: 'small' | 'middle' | 'large';
};

const sizeMap = {
  small: 4,
  middle: 6,
  large: 8,
};

const defaultProps = {
  size: 'middle',
};
type Props = PropsWithChildren<
  typeof defaultProps & LoadingProps & HTMLAttributes<any>
>;

// 单纯的 loading 加在内容上的 loading
const Loading: FC<Props> = ({ size, children, ...rest }) => {
  const theme = useTheme();
  return (
    <div className="loading-container" {...rest}>
      <>
        <div className="loading">
          <i />
          <i />
          <i />
        </div>
        <style jsx>{`
          .loading > i {
            width: ${sizeMap[size]}px;
            height: ${sizeMap[size]}px;
            margin-right: 2px;
          }
        `}</style>
        <style jsx>{`
          .loading > i {
            display: inline-block;
            background: ${theme.palette.grayscale_8};
            border-radius: 50%;
            animation: loading-zoom 1.4s infinite both;
          }

          .loading > i:nth-child(2) {
            animation-delay: 0.2s;
          }

          .loading > i:nth-child(3) {
            animation-delay: 0.4s;
            margin-right: 0;
          }

          @keyframes loading-zoom {
            0% {
              opacity: 0.2;
            }
            20% {
              opacity: 1;
            }
            100% {
              opacity: 0.2;
            }
          }
        `}</style>
      </>
    </div>
  );
};

type LoadingComponent<P = {}> = React.FC<P> & {
  Container: typeof LoadingContainer;
};
export default withDefaults(
  Loading,
  defaultProps,
) as LoadingComponent<LoadingProps>;
