import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ResultsList from './ResultsList';

const ResultDetail = ({ result })=> {
    return (
        <View style = {styles.container}>
            <Image style = {styles.imageStyles} source={{uri: result.image_url}}/>
            <Text style = {styles.nameStyles}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyles: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyles: {
        fontWeight: "bold",
        fontSize: 16
    }
});

export default ResultDetail;


