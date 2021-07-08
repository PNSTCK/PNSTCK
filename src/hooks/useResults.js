import {useEffect, useState} from 'react';
import yelp from '../screens/api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMassage, setErrorMassage] = useState ('');

    const searchApi = async searchTerm => {
        
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });  
             setResults(response.data.businesses)
        } catch (err) {  
            setErrorMassage ('something wrong i can feeling');
            }
        useEffect(() => {
            searchApi('pasta')
        }, [])
     };

    return [searchApi, results, errorMassage];
}