<h2>Recipe-Share🔁</h2>
This is a recipe sharing web application 🍅 that is made with MERN stack. The frontend consists of adding and deleting recipes that uses Redux toolkit for global state management ⚛️. The authentication is powered by JWT and local storage is being implemented so that the user won't have login again and again ✨. The Node.js backend uses MongoDB as the database to add, delete recipes and for authentication 🔐.
<br>


<h2>Screenshots 🪧</h2>

![register](https://user-images.githubusercontent.com/56751927/190058646-f5d1a166-9492-42fa-81d5-992c74d64ab7.png)

![login](https://user-images.githubusercontent.com/56751927/190058651-8a99c828-1ba7-4330-8f02-0ba3127cee23.png)

![dashboard](https://user-images.githubusercontent.com/56751927/190058656-500dc6f5-7933-469e-82f8-05ec19b9072f.png)


<h2>How to set the project locally ⚙</h2>

* Open the terminal and then type 
 ```
 $ git clone <the url of the Github repo>
 ```
*This clones the repo*


* ``cd`` into the new folder and cd into the backend folder type
```sh
$ npm install
```
* Again, ``cd`` into the frontend folder and repeat the above command

*This installs the required dependencies for both the frontend and backend*


* Create a ```.env``` file in the backend directory and add the following
```
MONG_URI=<URI>
JWT_SECRET=<secret>

```

    
* To run the backend  
 ```sh
 $ cd backend/
 $ npm run dev
 ```
 
* To run the frontend
 ```sh
 $ cd backend/frontend
 $ npm run start
 ```
  
### LICENSE 🏢
```
MIT License

Copyright (c) 2022 Bishal Roy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
