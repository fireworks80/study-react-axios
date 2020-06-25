import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

export default ({ match }) => {
  // console.log(match.params.category);
  const category = match.params.category || 'all';

  return (
    <>
    <Categories />
    <NewsList category={category} />
    </>
  )
};
