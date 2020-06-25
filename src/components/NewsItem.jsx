import React from 'react';
import styled from 'styled-components';

const ArticleBlock = styled.div`
  display: flex;
  box-sizing: border-box;

  &:nth-child(n + 2) {
    margin-top: .3em;
  }

  img {
    margin-right: 1em;
    width: 30%;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ({ article }) => {
  const { urlToImage, title, url, description } = article;

  return (
    <ArticleBlock>
      <img src={urlToImage} alt={title} />
      <div>
        <h2><a href={url} target="_blank">{title}</a></h2>
        <p>{description}</p>
      </div>
    </ArticleBlock>
  );
};