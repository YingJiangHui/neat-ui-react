import { useCallback, useEffect, useRef, useState } from 'react';
import { TreeFolderProps } from '@/Tree/tree-folder';
import useUpdateEffect from '@/hooks/useUpdateEffect';

export const useTreeFolderLogic = (props: TreeFolderProps) => {
  const { defaultExpand, className, onChange } = props;
  const [isExpand, setIsExpand] = useState(defaultExpand);
  const directoryRef = useRef<HTMLUListElement | null>(null);

  const trigger = useCallback(() => {
    setIsExpand((isExpand) => !isExpand);
  }, []);

  useEffect(() => {
    if (defaultExpand) {
      Object.assign(directoryRef.current?.style, {
        height: `auto`,
      });
    } else {
      Object.assign(directoryRef.current?.style, {
        height: `0px`,
      });
    }
  }, [defaultExpand]);

  useUpdateEffect(() => {
    if (!directoryRef.current) return;
    if (isExpand) {
      Object.assign(directoryRef.current?.style, {
        height: 'auto',
      });
      const { height } = directoryRef.current?.getBoundingClientRect();
      Object.assign(directoryRef.current?.style, {
        height: `0px`,
      });
      directoryRef.current?.getBoundingClientRect();
      Object.assign(directoryRef.current?.style, {
        height: `${height}px`,
      });
    } else {
      const { height } = directoryRef.current?.getBoundingClientRect();
      Object.assign(directoryRef.current?.style, {
        height: `${height}px`,
      });
      directoryRef.current?.getBoundingClientRect();
      Object.assign(directoryRef.current?.style, {
        height: '0px',
      });
    }
    onChange?.();
  }, [isExpand]);

  const setHeightToAuto = () => {
    Object.assign(directoryRef.current?.style, {
      height: `auto`,
    });
  };

  return { isExpand, trigger, setHeightToAuto, directoryRef };
};

export default useTreeFolderLogic;
