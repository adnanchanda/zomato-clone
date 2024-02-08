import React from 'react';
import { View, Text, Card, Center, Input, HStack, TextArea, Button, FormControl, Stack } from "native-base";

const LoginPage = () => {
    return (
        <View flex={1} py={4} alignItems="center">
            <Card w={"90%"} maxWidth="400px">
                <Center>
                    <Stack space={4} p={4} w="100%">
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>Name</FormControl.Label>
                            <HStack space={2}>
                                <Input px={2} py={2} placeholder="First Name" flex={1} />
                                <Input px={2} py={2} placeholder="Last Name" flex={1} />
                            </HStack>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>Phone Number</FormControl.Label>
                            <Input px={2} py={2} placeholder="Phone Number" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>Address</FormControl.Label>
                            <TextArea h={20} placeholder="Address" autoCompleteType={undefined} />
                        </FormControl>
                        <Button variant="solid" colorScheme="blue" _text={{ color: 'white' }}>Submit</Button>
                    </Stack>
                </Center>
            </Card>
        </View>
    );
};

export default LoginPage;
