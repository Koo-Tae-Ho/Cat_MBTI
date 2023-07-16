import React, { useState } from "react";
import styled from "styled-components";
import { Button, ProgressBar } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);

  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  console.log("totalScore", totalScore);

  const navigate = useNavigate();

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);
    //다음문제로 문제 수 증가
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      //mbti 도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      //결과 페이지로 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionData[questionNo].title}</Title>

      <ButtonGroup>
        <Button
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
            marginLeft: "20px",
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  //지금 전체화면 다채우는중
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30pt;
  text-align: center; //중앙배치
  font-family: "HSSantokki-Regular";
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row; //옆으로
  align-items: center;
  justify-content: center; //중앙배치
  font-family: "HSSantokki-Regular";
`;
