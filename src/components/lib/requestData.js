
import axios from 'axios'

export const sum = (a, b) => {
    return a + b
}


export default function postData(data, url) {
    const requestOption = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    
    const response = axios.post(url, requestOption)
    return response
}