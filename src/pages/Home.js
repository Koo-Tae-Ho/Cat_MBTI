import React from "react";
import styled from "styled-components";
import catlogo from "../assets/catlogo.jpg";
import Button from "react-bootstrap/Button";
const Home = () => {
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img
            src={catlogo}
            className="rounded-circle"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
        <Button>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  //지금 전체화면 다채우는중
  height: 100vh;
  width: 100%;
`;

const Contents = styled.div`
  display: flex; //Flex 아이템들은 가로 방향으로 배치되고, 자신이 가진 내용물의 width 만큼만 차지
  justify-content: center; //중앙배치
  align-items: center;
  flex-direction: column; //세로방향
`;
const Header = styled.div`
  font-size: 40pt; //글자크기
  display: flex; //Flex 아이템들은 가로 방향으로 배치되고, 자신이 가진 내용물의 width 만큼만 차지
  justify-content: center; //중앙배치
  align-items: center;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
`;
