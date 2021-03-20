

export default class APIService{
    static UpdateArticle(article_id, body, token){

        return fetch(`http://127.0.0.1:8000/article/${article_id}/`, {
            'method':'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':`Token ${token}`
            }, 
            body:JSON.stringify(body)
            })
            .then(resp => resp.json())


        }


      static insertArticle(body, token)
      {
        return fetch('http://127.0.0.1:8000/article/',
        {
          'method': 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Token ${token}`
          },
          body:JSON.stringify(body)
        })

        .then(resp => resp.json()) 
      }  


   static Deletearticle(article_id, token) {
    return fetch(`http://127.0.0.1:8000/article/${article_id}/`, {
      'method':'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token ${token}`
      }

  })
}

    static LoginUser(body)
      {
        return fetch('http://127.0.0.1:8000/auth/',
        {
          'method': 'POST',
          headers: {
            'Content-Type': 'application/json',
   
    
          },
          body:JSON.stringify(body)
        })

        .then(resp => resp.json()) 
        .catch(e => console.log(e))
      }  


}  
