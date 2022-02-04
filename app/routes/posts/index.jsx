import { Link, useLoaderData } from 'remix'
import { db } from '~/utils/db.server'

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      take: 20,
      select: { id: true, title: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    }),
  }

  return data
}

function PostItems() {
  const { posts } = useLoaderData()

  return (
    <>
    <div className='p-10'>


      <ul className='posts-list sm:flex xl:ml-56 '>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <div className="p-10 hover:text-blue-600">
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleString()}
              </div>

            </Link>
          </li>
        ))}
      </ul>
      </div>

    </>
  )
}

export default PostItems
