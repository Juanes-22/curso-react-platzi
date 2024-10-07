import {useState, useEffect} from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [items, setItems] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const storeItems = (newItems: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(newItems));
      setItems(newItems);
    } catch (error) {
      console.error('Error storing items to localStorage:', error);
      setError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(key);
        if (!localStorageItems) {
          storeItems(initialValue);
        }
        const parsedItems: T = JSON.parse(localStorageItems || '[]');
        setItems(parsedItems);
        setLoading(false);
      } catch (error) {
        console.error('Error during initialization:', error);
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []);

  return {
    items,
    setItems: storeItems,
    loading,
    error,
  } as const;
};

export default useLocalStorage;
