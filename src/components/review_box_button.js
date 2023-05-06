import { Grid, Input, Loading, Button } from "@nextui-org/react";
import { styled } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";

export default function ReviewBoxButton({
  selected,
  items,
  setItems,
  setSelected,
}) {
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async () => {
    const url = "https://rating-review-api.cyclic.app/reviews";
    const newReview = {
      teacherId: selected,
      review: reviewText,
    };
    console.log(newReview);
    const res = await axios.post(url, newReview, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    setItems([...items, newReview]);
    console.log(res);
  };

  return (
    <>
      <Input
        onChange={(e) => setReviewText(e.target.value)}
        clearable
        rounded
        fullWidth
        contentRightStyling={false}
        placeholder="Type your message..."
        contentRight={
          <Button onPress={() => handleSubmit()} auto rounded>
            Send
          </Button>
        }
      />
    </>
  );
}
