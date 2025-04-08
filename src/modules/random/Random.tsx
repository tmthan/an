"use client";
import { Button, Card, Flex, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Food } from "./types";
import { DEFAULT_RANDOM_LIST } from "./constants";
import { SelectFood } from "./SelectFood";
import { GiftOutlined } from "@ant-design/icons";
import { useGetRandomListQuery } from "./useRandomListQuery";

const { Title, Paragraph } = Typography;

export function Random() {
  const { data: randomList, isFetched } = useGetRandomListQuery();
  const [foodList, setFoodList] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food>();

  const getRandomFood = useCallback(() => {
    if (foodList?.length) {
      return foodList[Math.floor(Math.random() * foodList.length)];
    }
    if (isFetched && randomList?.length) {
      return randomList[0].items[
        Math.floor(Math.random() * randomList[0].items.length)
      ];
    }
    return DEFAULT_RANDOM_LIST[
      Math.floor(Math.random() * DEFAULT_RANDOM_LIST.length)
    ];
  }, [foodList, isFetched, randomList]);

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
    if (isFetched && randomList) {
      random();
    }
  }, [random, isFetched, randomList]);
  return (
    <Flex
      justify="center"
      align="center"
      className="app-container"
      style={{
        background: "url('/ban-tiec.jpeg')",
      }}
    >
      <Card
        title="Hôm nay ăn gì?"
        className="app-card random-card"
        extra={<SelectFood setFoodList={setFoodList} />}
      >
        <Flex gap="middle" align="center" vertical>
          <Paragraph className="text-center px-14">
            <Title className="food-name">{selectedFood?.name}</Title>
          </Paragraph>
          <Button onClick={random} type="primary" icon={<GiftOutlined />}>
            Chọn lại
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Random;
