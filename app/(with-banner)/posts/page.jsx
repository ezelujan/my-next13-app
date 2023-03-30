import { ListOfPosts } from '@components/posts/ListOfPosts'

export default async function Post ({ params }) {
  return (
    <section>
      <ListOfPosts />
    </section>
  )
}
