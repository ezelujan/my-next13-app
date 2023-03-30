import Image from 'next/image'

const fetchComments = async id => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60
      }
    }
  )
  return await res.json()
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#444', fontSize: '11px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image
            height={50}
            width={50}
            alt={comment.name}
            src={`https://api.dicebear.com/6.x/big-smile/svg?seed=${comment.email}`}
          />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
