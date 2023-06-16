import React from 'react'

export default function PostCard(post) {
  
  if(!post) return null
  const {title,thumbnail,tags,meta,createdAt} =post
  
    return (
    <div>PostCard</div>
  )
}
