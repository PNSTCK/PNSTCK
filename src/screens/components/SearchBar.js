import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle} >
            <Feather name="search" style={styles.iconStyle} color="black" />
            <TextInput
                style={styles.inputStyle}
                placeholder="search" 
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}

            />
        </View>
    );
}

const styles = StyleSheet.create ({
    backgroundStyle: {
        backgroundColor: '#00FF80',
        height: 50,
        borderRadius: 50,
        marginHorizontal: 5,
        flexDirection: 'row',

    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15

    },
    inputStyle: {
        fontSize: 15,
        
        
    }
})

export default SearchBar;