import React, {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useMemo,
} from 'react';
import classNames from '@/shared/classnames';
const defaultProps: Required<Props> = {
  size: 'medium',
  align: 'normal',
  wrap: false,
  direction: 'horizontal',
};
type SpaceSize = 'small' | 'medium' | 'large' | number;

interface Props {
  /**
   * @description       间隙大小
   * @description.zh-CN 间隙大小
   * @default           medium
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];
  /**
   * @description       水平位置
   * @description.zh-CN 水平位置
   * @default           normal
   */
  align?: 'center' | 'start' | 'end' | 'baseline' | 'normal';
  /**
   * @description       布局方向
   * @description.zh-CN 布局方向
   * @default           horizontal
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @description       溢出是否换行
   * @description.zh-CN 溢出是否换行
   * @default           false
   */
  wrap?: boolean;
}

type DirectionMap = {
  horizontal: 'row';
  vertical: 'column';
};

type SpaceProps = Partial<typeof defaultProps> & Props & HTMLAttributes<any>;
export const Space: FC<PropsWithChildren<SpaceProps>> = (props) => {
  const { size, style, align, className, wrap, direction, children, ...rest } =
    {
      ...defaultProps,
      ...props,
    };
  const alignMap = {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    baseline: 'baseline',
    normal: 'normal',
  };
  const sizeMap: { [key in SpaceSize]: number } = {
    small: 8,
    medium: 16,
    large: 24,
  };
  const directionMap: DirectionMap = {
    horizontal: 'row',
    vertical: 'column',
  };
  const isWrap = useMemo(() => (wrap ? 'wrap' : 'nowrap'), [wrap]);

  const cssSize = useMemo(
    () =>
      Array.isArray(size)
        ? `${sizeMap[size[0]]}px ${sizeMap[size[1]]}px`
        : sizeMap[size],
    [size],
  );
  return (
    <div
      style={{
        gap: cssSize,
        alignItems: alignMap[align],
        flexWrap: isWrap,
        flexDirection: directionMap[direction],
        ...style,
      }}
      className={classNames('space', className)}
      {...rest}
    >
      {children}
      <style jsx>{`
        .space {
          width: 100%;
          display: inline-flex;
        }
      `}</style>
    </div>
  );
};

export default Space;
