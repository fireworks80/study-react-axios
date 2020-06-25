# axios, newsapi 를 이용한 NEWS 뷰어 만들기

````
# App.js

<div>
  <Route path="/:category?" component={NewsPage} />
</div>
````
url 파라미터로 category를 넘긴다. 뒤에 ?는 category가 선택적(있을수도 있고 없을 수도 있다)이다.

````
# NewsPage.jsx

export default ({ match }) => {
  // console.log(match.params.category);
  // match에서 params의 category 값 확인
  const category = match.params.category || 'all';

  return (
    <>
    <Categories />
    <NewsList category={category} />
    </>
  )
};

````