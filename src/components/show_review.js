import { Card, Grid, Text } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ShowReview({ selected, items, setItems }) {
  useEffect(() => {
    const get_reviews = async (teacherId) => {
      if (!teacherId) return;
      const url = "https://rating-review-api.cyclic.app/reviews/" + teacherId;
      const res = await axios.get(url);
      setItems(res.data);
    };

    get_reviews(selected);
  }, [selected]);

  useEffect(() => { }, [items]);

  return (
    <Grid.Container gap={2}>
      {items &&
        items.map((el) => (
          <Grid key={el._id} xs={4}>
            <Card>
              <Card.Body>
                <Text>{el.review}</Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
    </Grid.Container>
  );
}
