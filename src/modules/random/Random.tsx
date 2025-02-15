"use client";
import { Button, Typography, Flex } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Food } from "./types";
import { DEFAULT_RANDOM_LIST } from "./constants";
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

      <Paragraph className="text-center">
        <Title className="text-center">{selectedFood?.name}</Title>
      </Paragraph>
      <Button onClick={random}>Chọn lại</Button>
    </>
  );
}

export default Random;
