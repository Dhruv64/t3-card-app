import { Input } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';



function Form() {
    const id = useId();
    return (
        <>
            <Input
                icon={<IconAt />}
                placeholder="First Name"
                radius="xl"
                size="xl"
                
                
            />
            <Input
                icon={<IconAt />}
                placeholder="Your email"
                radius="xl"
                size="xl"
                error
                
            />
            <Input.Wrapper id={id} label="Your phone" required maw={320} mx="auto">
                <Input<any>
                    component={IMaskInput}
                    mask="+91 (000) 000-00-00"
                    id={id}
                    placeholder="Your phone"
                />
            </Input.Wrapper>
        </>

    );
}

export default Form 

