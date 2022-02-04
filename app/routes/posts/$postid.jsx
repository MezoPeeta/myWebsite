import {useLoaderData,Link,redirect} from 'remix'
import {db} from '~/utils/db.server'

export const loader = async ({params}) => {
    const post = await db.post.findUnique({
        where: { id: params.postid }

    })

    if(!post) throw new Error("Post Not Found")

    const data = {post}

    return data
}

export const action = async ({ request, params }) => {
    const form = await request.formData()
    if (form.get('_method') === 'delete') {  
      const post = await db.post.findUnique({
        where: { id: params.postid },
      })
  
      if (!post) throw new Error('Post not found')
  
      await db.post.delete({ where: { id: params.postid } })
      
  
      return redirect('/posts')
    }
  }
  

  function Post() {
    const { post } = useLoaderData()
  
    return (
      <div className='p-10'>
        <div className='page-heade '>
        <Link to='/posts' className='btn btn-reverse border rounded-full py-2 px-10 hover:bg-slate-900 hover:text-white'>
            Back
          </Link>
          <h1 className='sm:px-44 text-2xl py-10'>{post.title}</h1>

        </div>
  
        <div className='page-content sm:px-44 text-xl'>{post.body}</div>
  
        {/* <div className='page-footer'>
            <form method='POST'>
              <input type='hidden' name='_method' value='delete' />
              <button className='btn btn-delete'>Delete</button>
            </form>
          
        </div> */}
      </div>
    )
  }
  

export default Post
