import { createContext, useEffect, useState } from "react";

// Define the initial state and context
const ContextStore = createContext({
  article: null,
  category: '',
  country: '',
  setCountry: () => {},
  setCategory: () => {},
});

export const Store = ({ children }) => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('in');

  useEffect(() => {
    const fetchArticle = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=44ed0456740143bd8c66ff7489d750df`;
      
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setArticle(result.articles);
        setError(null); // Clear any previous error
      } catch (error) {
        setError(error.message);
      }
    };

    fetchArticle();
  }, [category, country]);

  const contextValue = {
    article,
    category,
    country,
    setCountry,
    setCategory,
  };

  return (
    <ContextStore.Provider value={contextValue}>
      {error ? <div>Error: {error}</div> : children}
    </ContextStore.Provider>
  );
};

export default ContextStore;
