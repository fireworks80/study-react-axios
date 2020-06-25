import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체'
  },
  {
    name: 'business',
    text: '비지니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  }
];

const Nav = styled.nav`
  width: 768px;
  margin: 0 auto;
  display: flex;
`;

const Category = styled(NavLink)`
  flex: 1 0 auto;
  padding: 1em 1em .5em;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: inherit;

  &:hover,
  &.active {
    margin-bottom: -1px;
    font-weight: bold;
    color: #34a7ca;
    border-bottom: 1px solid #34a7ca;
  }
`;

export default ({ onHandle }) => {
  return (
    <Nav>
      {categories.map(category => (
        <Category to={category.name === 'all' ? '' : `/${category.name}`} exact={category.name === 'all'} activeClassName="active" key={category.name}>{category.text}</Category>
      ))}
    </Nav>
  );
};