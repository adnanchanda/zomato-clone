import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box, HStack } from 'native-base';

const Table = ({ data }) => {
    if (!data) {
        return <Text>No data available</Text>;
    }

    return (
        <View style={styles.container}>

            <HStack space={2} bg="gray.100" p={2} rounded="md">
                <Box flex={1}><Text style={styles.headerText}>First Name</Text></Box>
                <Box flex={1}><Text style={styles.headerText}>Last Name</Text></Box>
                <Box flex={1}><Text style={styles.headerText}>Phone</Text></Box>
                <Box flex={1}><Text style={styles.headerText}>Address</Text></Box>
            </HStack>

            {data.map((user, index) => (
                <HStack key={index} space={2} p={2} borderBottomWidth={1} borderColor="gray.200">
                    <Box flex={1}><Text style={styles.cellText}>{user.firstName}</Text></Box>
                    <Box flex={1}><Text style={styles.cellText}>{user.lastName}</Text></Box>
                    <Box flex={1}><Text style={styles.cellText}>{user.phoneNumber}</Text></Box>
                    <Box flex={1}><Text style={styles.cellText}>{user.address}</Text></Box>
                </HStack>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    headerText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cellText: {
        textAlign: 'center',
    },
});

export default Table;
