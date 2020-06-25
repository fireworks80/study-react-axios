import React, {useState, useCallback} from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';



function App() {
  const [category, setCategory] = useState('all');

  const onHandleCategory = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <div>
      <Route path="/:category?" component={NewsPage} />
    </div>
  );
}

export default App;
