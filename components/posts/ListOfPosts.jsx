import { LikeButton } from './LikeButton'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
  return await res.json()
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}
