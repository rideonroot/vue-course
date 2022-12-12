export default {
  getItem: (key) => {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
      console.log("Error getting data from localStorage", error);
      return null;
    }
  },

  setItem: (key, data) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log("Error saving data in localStorage", error);
    }
  },

  removeItem: (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      console.log("There is nothing to remove with key ", key);
    }
  },
};
