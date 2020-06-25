import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import styled from 'styled-components';
import usePromise from '../lib/usePrimise';

const apiKey = '3ddbd31b3cb04224b4656a385a395fd0';

const NewsListContainer = styled.div`
  outline: 1px solid;
  padding-bottom: 3rem;
  margin: 2rem auto 0;
  width: 768px;
`;

export default ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`);
  }, [category]);



  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const detchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       const result = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`);
  //       setData(result.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   detchData();
  // }, [category]);

  if (loading) {
    return <NewsListContainer>Loading .....</NewsListContainer>
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListContainer>에러 발생!</NewsListContainer>;
  }

  const { articles } = response.data;

  return (
    <NewsListContainer>
      {articles.map(d => {
        return <NewsItem key={d.url} article={d} />
      })}
    </NewsListContainer>
  );
};