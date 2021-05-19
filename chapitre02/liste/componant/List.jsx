import React from 'react';
import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function List() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = 'http://restcountries.eu/rest/v2/all'
        fetch(url)
            .then(response => response.json())

            .then(dataCountries => {
                console.log('data', dataCountries);
                setCountries(dataCountries)

            })
            .catch(err => console.error(err))

    }, [])

    const renderItem = ({ item }) => (
        <View style={styles.container2}>
            <Image
                source={{ uri: item.flag }}
                style={{ resizeMode: 'center', width: 100, height: 100 }} />

            <Text>name: {item.name}</Text>
            <Text>capital: {item.capital} </Text>
        </View>
    );
    return (
        <div>
            <FlatList
                data={countries}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </div>
    );
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

