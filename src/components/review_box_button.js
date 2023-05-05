import { Grid, Input, Loading, Button } from '@nextui-org/react';
import { styled } from '@nextui-org/react';

export default function ReviewBoxButton() {
    return (
        <>
            <Input
                clearable
                rounded
                fullWidth
                contentRightStyling={false}
                placeholder="Type your message..."
                contentRight={
                    <Button auto rounded>
                        Send
                    </Button>
                }
            />
        </>
    );
}
