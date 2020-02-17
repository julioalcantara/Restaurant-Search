import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    // update content on the screen need to use "state"
    const [term, setTerm] = useState(''); // used for search bar
    const [searchApi, results, errorMessage] = useResults();
   
    //helper function 
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        //JSX block
        //conditional render unsing "Ternary Expression"
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage  ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('€')} 
                    title="Cost Effective"
                />
                <ResultsList 
                    results={filterResultsByPrice('€€')} 
                    title="Bit Pricier"
                />
                <ResultsList 
                    results={filterResultsByPrice('€€€')} 
                    title="Big Spender"
                />
            </ScrollView>
            
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;