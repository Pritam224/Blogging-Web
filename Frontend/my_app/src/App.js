import './App.css';
import {useState, useEffect} from 'react'
import ArticleList from './components/ArticleList'
import Form from './components/Form'
import {useCookies} from 'react-cookie';


function App() {

  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)
  const [token] = useCookies(['mytoken'])

  useEffect(() => {
      fetch('http://127.0.0.1:8000/article/',{
        'method':'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 3d7ae6984a89c28bf741607d86ca4a9be92d23a5'
        },
   
      })

      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error))

  }, [token])

  const editbtn = (article) => {
    setEditArticle(article)
  }

const deleteArticle = (article) => {
    const new_articles = articles.filter(myarticle => {
      if(myarticle.id === article.id)
        return false;
      return true;
    })
    setArticles(new_articles)
}

  const updatedInformation =  (article) =>{
      const new_article = articles.map(myarticle => {
        if(myarticle.id  === article.id){
          return article;
        }
        else{
          return myarticle;
        }
        
      } )

      setArticles(new_article)
  }

  const articleForm = () => {
    setEditArticle({title: '', description: ''})
  }

  const insertedInformation = (article) => {
    const new_articles = [...articles, article]     //this is how to append new article into the list of articles that we have fetched before
    setArticles(new_articles)
  }

  return (
    <div className="App">
      <div className = "row">
        <div className = 'col'>

          <h1>Django And React Blog</h1>
          <br/>
        </div>

        <div className = "col">
          <button onClick = {articleForm} className = "btn btn-light">Insert Article</button>
        </div>
      </div>



      <ArticleList articles = {articles} editbtn = {editbtn} deleteArticle = {deleteArticle}/>
      {editArticle ? <Form article = {editArticle} updatedInformation = {updatedInformation}  insertedInformation = {insertedInformation}/> : null}
    </div>
  );
}

export default App;
