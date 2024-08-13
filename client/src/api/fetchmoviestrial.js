import axios from "axios";

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://Real-Time-Web-Search.proxy-production.allthingsdev.co/v1/search?q=create%2520an%2520online%2520store&limit=100',
  headers: { 
    'x-apihub-key': 'XAI8l0DLvhoK4rkYDvrzQBqaZJEuUXHc4aXh-aXln6bKTn-mDa', 
    'x-apihub-host': 'Real-Time-Web-Search.allthingsdev.co', 
    'x-apihub-endpoint': 'd2f8da3f-6773-4db9-8ef8-eb8d20242ac7'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
