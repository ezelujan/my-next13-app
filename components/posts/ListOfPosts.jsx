import Link from 'next/link'
import { LikeButton } from './LikeButton'

const fetchPosts = async () => {
  // getStaticProps
  // -> return fetch('https ://jsonplaceholder.typicode.com/posts').then(res => res. json())

  // getServerSideProps
  // > return fetch( ‘https ://jsonptaceholder. typicode.com/posts', { cache: ‘no-store' }).then(res => res. json())

  // incremental static regeneration
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
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton id={post.id} />
    </article>
  ))
}
