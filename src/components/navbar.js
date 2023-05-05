import { Navbar, Button, Link, Text, Image } from "@nextui-org/react";
import AddFacultyModal from "./AddFacultyModal";

export default function NavigationBar() {
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Text>LDCE</Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <AddFacultyModal />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
