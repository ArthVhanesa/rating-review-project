import React, { useState } from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import axios from "axios";

export default function AddFacultyModal() {
  const [facultyName, setFacultyName] = useState("");
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const handleSubmit = async () => {
    const url = "https://rating-review-api.cyclic.app/teacher/";
    const res = await axios.post(
      url,
      {
        teacherName: facultyName,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log(res);
  };

  return (
    <div>
      <Button auto shadow onPress={handler}>
        Add Faculty
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Add faculty name
            <Text b size={18}>

            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            onChange={(e) => setFacultyName(e.target.value)}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Faculty Name"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button onClick={() => handleSubmit()} auto onPress={closeHandler}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
