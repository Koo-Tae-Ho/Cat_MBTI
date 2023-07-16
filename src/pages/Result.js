import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기</Title>
        <LogoImage>
          <img
            src={ResultData[0].image}
            className="rounded-circle"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>
          예비 집사님과 찰떡궁합인 고양이는 "{ResultData[0].name}" 입니다!
        </Desc>
        <Button
          style={{ fontFamily: "HSSantokki-Regular" }}
          onClick={() => navigate("/")}
        >
          테스트 다시하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

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
  font-family: "HSSantokki-Regular";
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "HSSantokki-Regular";
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "HSSantokki-Regular";
  margin-bottom: 20px;
`;
