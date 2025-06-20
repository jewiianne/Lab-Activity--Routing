import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Link,Navigate } from 'react-router-dom'
import React, {useState} from 'react';

// page components
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Article from './pages/Article'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const articles = [
    {
      "id": "1",
      "title": "Welcome to the Site",
      "author": "Jeri",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
    },
    {
      "id": "2",
      "title": "JavaScript 101",
      "author": "Ann",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
    },
    {
      "id": "3",
      "title": "What is Vite???!!",
      "author": "Mendaros",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
    }
  ];

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Ciit's Home Page</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element = {<Home articles={articles}/>} />              
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/articles/:urlId" element ={<Article articles={articles} />} />   
          <Route path="/*" element={<Navigate to="/"/> }/>       
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App