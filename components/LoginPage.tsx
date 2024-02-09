import React, { useEffect, useState } from 'react';
import { View, Text, Card, Center, Input, HStack, TextArea, Button, FormControl, Stack } from "native-base";
import axios from 'axios';

const LoginPage = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: ''
    });

    const handleChange = (key, value) => {
        setData(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    // const handleSubmit = () => {
    //     console.log(data);
    // };

    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch initial data when the component mounts
    }, []);

    const postData = async () => {
        try {
            const response = await axios.post('http://localhost:3000/posts', {
                first_name: data.firstName,
                last_name: data.lastName,
                phone: data.phoneNumber,
                address: data.address,
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <View flex={1} py={4} alignItems="center">
            <Card w={"90%"} maxWidth="400px">
                <Center>
                    <Stack space={4} p={4} w="100%">
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>Name</FormControl.Label>
                            <HStack space={2}>
                                <Input px={2} py={2} placeholder="First Name" flex={1} value={data.firstName} onChangeText={value => handleChange('firstName', value)} />
                                <Input px={2} py={2} placeholder="Last Name" flex={1} value={data.lastName} onChangeText={value => handleChange('lastName', value)} />
                            </HStack>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>Phone Number</FormControl.Label>
                            <Input px={2} py={2} placeholder="Phone Number" value={data.phoneNumber} onChangeText={value => handleChange('phoneNumber', value)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>Address</FormControl.Label>
                            <TextArea h={20} placeholder="Address" autoCompleteType={undefined} value={data.address} onChangeText={value => handleChange('address', value)} />
                        </FormControl>
                        <Button variant="solid" colorScheme="blue" _text={{ color: 'white' }} onPress={postData}>Submit</Button>
                    </Stack>
                </Center>
            </Card>


        </View>
    );
};

export default LoginPage;


