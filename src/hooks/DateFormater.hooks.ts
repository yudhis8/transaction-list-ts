import {useCallback} from 'react';

const useDateFormatter = () => {
  const formatDate = useCallback((dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }, []);

  return {formatDate};
};

export default useDateFormatter;
