import React from 'react'
import styled from "styled-components";

function TestPage(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Contents>{props.contents}</Contents>
    </Wrapper>
  );
}

// 해당 컴포넌트 내에서 쓰이는 스타일링(지역 스타일링)
const Title = styled.h1`
  
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`;

const Contents = styled.p`
  
  line-height: 1.5;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 16px auto;
  max-width: 400px;
`;

export default TestPage;