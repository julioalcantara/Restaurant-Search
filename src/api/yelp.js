import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: //Bearer + API key
            'Bearer t-w4BysX9LnGB7mHfKqrSPVMdLR02b2_ecfK2HAtvLnRmVAJ5J9q_Xx-trGdvx0UIJZf0sIZ2TPJBgHj_hun643kim3G-P02yJ1EGXJWLUkkZPb-Rp9paCUyh85CXnYx'
    }
});