import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
      {
posts.map((post,id)=>{
    return(
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} time={post.minutes}/>
    )
})
      }
    </main>
  )
}

export default ArticleList
