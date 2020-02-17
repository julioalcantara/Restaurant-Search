import { useEffect, useState } from  'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]); // used for call API
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        // handling errors using 'try' and 'catch'
        try{
            const response = await yelp.get('/search', { // adding /search to the http request
                //adding paramters to http request
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'dublin'
                }
            });
            setResults(response.data.businesses);
        } 
        catch (err){
            setErrorMessage('Something went wrong');
            console.log(err);
        }
    }

    //Call searchApi when component is fisrt renderd  => BAD CODE ! because it repete the code over and over "infinity loop"
    // searchApi('pasta');
    useEffect (()=>{
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};