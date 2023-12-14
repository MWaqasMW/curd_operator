export const getDataFromStorage = (key) => {
    try {
      const value = localStorage.getItem(key);
      if (value !== null) {
        // Value found, return it
        return JSON.parse(value);
      } else {
        // No value found for the key
        return null;
      }
    } catch (error) {
      console.error('Error fetching data from localStorage:', error);
      return null;
    }
  };
  
  export const setDataInStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting data in localStorage:', error);
    }
  };
  
  export const removeDataFromStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from localStorage:', error);
    }
  };
  
  export const clearAllDataInStorage = () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing all data from localStorage:', error);
    }
  };
   