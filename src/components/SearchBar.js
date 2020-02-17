import React from 'react';
import {View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; // import the icon 


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        
        <View style = {styles.backgroundStyle}>
            <Feather name = "search" style= {styles.iconStyle}/> 
            <TextInput 
                autoCapitalize = 'none'
                autoCorrect = {false}
                style={styles.inputStyle} 
                placeholder = "Search"
                value={term}
                onChangeText = {newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );
};

//styling the page
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 8,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;