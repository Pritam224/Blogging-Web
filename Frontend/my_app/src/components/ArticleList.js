
import React from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie'
function ArticleList(props) {

    const [token] = useCookies(['mytoken'])
    
    const editbtn = (article) => {
        props.editbtn(article)
    } 
     
    const deleteArticle = (article) => {
        APIService.Deletearticle(article.id, token['mytoken'])
        .then(() => props.deleteArticle(article))
        .catch(e => console.log(e))
    }


    return (
        
        <div>
            {props.articles && props.articles.map(article => { 
        return(
            <div key = {article.id}>
             <h2>{article?.title}</h2>
             <p>{article.description}</p>

             <div className = "row">
             <div className = "col-md-1">
             <button className = 'btn btn-outline-info' onClick = {() => editbtn(article)}>Update</button>
             </div>
             <div className = "col">
             <button className = 'btn btn-outline-danger' onClick = {() => deleteArticle(article)}>Delete</button>
             </div>

             </div>
             <hr className = "hrclass"/>
             </div>
          )
        })
        }
        </div>
    )
}

export default ArticleList
