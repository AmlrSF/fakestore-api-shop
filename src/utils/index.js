const URL_API = 'https://fakestoreapi.com/';

export const fetchData = async (url)=>{
    try{
        const response = await fetch(`${URL_API}${url}`);
        const products = await response.json();
        return products
    }catch{
        return new Error('the Api url is invalid');
    }
}

