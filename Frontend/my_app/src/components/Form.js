import React, {useState, useEffect} from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
function Form(props) {

    const [title, settitle] = useState(props.article.title)
    const [description, setdescription] = useState(props.article.description)
    const [token] = useCookies(['mytoken'])

   const UpdateArticle = () => {
       APIService.UpdateArticle(props.article.id, {title, description}, token['mytoken'])
       .then(resp => props.updatedInformation(resp))
 
   }

   useEffect(() => {
       settitle(props.article.title)
       setdescription(props.article.description)
   }, [props.article])



   const insertArticle = () => {
        APIService.insertArticle({title, description},token['mytoken'])
        .then(resp => props.insertedInformation(resp))
   }



    return (
        <div>
          {props.article? (
              <div className = "mb-3">
              <label htmlFor = "title" className = "form-label">Title</label>
              <input type = "text" className = "form-control" id = "title" placeholder = "Please Enter The Title" value = {title}  onChange = {e => settitle(e.target.value)}/>
              <label htmlFor = "description" className = "form-label">Description</label>
              <textarea type = "text" className = "form-control" id = "description" rows = "5"  value = {description} onChange = {e => setdescription(e.target.value)}/>
              <br/>

              {
                  props.article.id ? <button onClick = {UpdateArticle} className = "btn btn-outline-success">Update</button>
                  : <button onClick = {insertArticle} className = 'btn btn-outline-success'>Insert Article</button>
              }
              
              </div>
          ) : null}
        </div>
    ) }

export default Form
