"use client";
import { Button, Col, Row, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Food } from "./types";
import { DEFAULT_RANDOM_LIST } from "./constants";
import { SelectFood } from "./SelectFood";
const { Title, Paragraph } = Typography;

export function Random() {
  const [foodList, setFoodList] = useState<Food[]>(DEFAULT_RANDOM_LIST);
  const [selectedFood, setSelectedFood] = useState<Food>();

  const getRandomFood = useCallback(() => {
    return foodList[Math.floor(Math.random() * foodList.length)];
  }, [foodList]);

  const random = useCallback(() => {
    let selected: Food = getRandomFood();
    setSelectedFood(selected);
    let loop = 0;
    const interval = setInterval(() => {
      selected = getRandomFood();
      loop++;
      setSelectedFood(selected);
      if (loop === 69) {
        clearInterval(interval);
      }
    }, 10);
  }, [getRandomFood]);

  useEffect(() => {
    random();
  }, [random]);
  return (
    <>
      <Title>Món ngẫu nhiên</Title>
      <Row>
        <Col flex="auto">
          <Paragraph className="text-center px-14">
            <Title className="text-center">{selectedFood?.name}</Title>
          </Paragraph>
        </Col>
        <Col flex="none">
          <SelectFood setFoodList={setFoodList}/>
        </Col>
      </Row>

      <Paragraph className="text-center">
        <Button onClick={random} variant="outlined" color="magenta">
          Chọn lại
        </Button>
      </Paragraph>
    </>
  );
}

export default Random;
