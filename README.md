# Getting Started with Create React App
# Personal blog client
Web app created with React.js that works as the front-ent of a personal blog. IT displays blogs stored on a mongodb database. It uses [this rest api](https://github.com/Matevito/blog-api) built on Node and Express.js as a backend.
# Live demo
You can take a look to this app [here](https://matevito.github.io/blog-public/)
# Technologies

React.js
Javascript
HTML
CSS
[MUI](https://mui.com/)

# Installation
Be sure that you already own Node.js and git on your computer. Then go to your terminal and do the following:
1. Clone this repo

        git clone https://github.com/Matevito/blog-public
    
2. Enter the app folder
    
        cd /blog-public

3. Install the npm packages of the app

        npm install
        
4. Set up the url of your rest-api
On the folder /src/components/ open the file api.js. Then setup the baseURL value of the *baseURL* variable on the axios component to where the rest-api you think to use as a backend is deployed

        const axios = require("axios")
        
        const api = axios.create({
            baseURL: <string with the url of the rest api>
        })
        
        export default api;

5. Build the distribution files

        npm run build
        
6. Start the app locally

        npm start
        
# Features
- Read and display blog post given by a rest-api in a minimalistic way.
- Comment on blog-post
- Get info of the authors of the blog: their bio and articles published.