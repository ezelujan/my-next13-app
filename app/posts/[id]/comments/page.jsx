const fetchComments = async id => {
  await new Promise(resolve => setTimeout(resolve, 3000))

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
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
