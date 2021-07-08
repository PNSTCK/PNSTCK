import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../screens/components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMassage] = useResults();
  
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View> 
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() =>searchApi(term)}

            />
            {errorMassage ? <Text> {errorMassage} </Text> : null}
            <Text style={styles.text}> now you got it!!!  </Text>
            <Text>we have {results.length} results </Text>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title=" Bit Pricer"/>
            <ResultsList results={filterResultsByPrice('$$$')} title= "Big Spender!"/>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'blue',
        height: 50,
        borderRadius: 50,
        marginHorizontal: 20,
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    }
});

export default SearchScreen;