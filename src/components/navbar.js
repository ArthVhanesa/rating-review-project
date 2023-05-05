import { Navbar, Button, Link, Text, Image } from "@nextui-org/react";

export default function NavigationBar() {
    return (
        <Navbar isBordered variant="floating">
            <Navbar.Brand>
                <Text>
                    LDCE
                </Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat as={Link} href="#">
                        Write Reviews 👇
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}