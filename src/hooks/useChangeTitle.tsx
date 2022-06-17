import { useEffect } from 'react';

const useChanegTitle = (shouldApply: boolean | undefined, name: string) => {
  useEffect(() => {
    if (shouldApply) {
      document.title = `Hello ${name}`;
    }
  }, [shouldApply, name]);
};

export default useChanegTitle;
