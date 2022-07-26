import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { db } from '../../app/firebaseApp'
import { doc } from 'firebase/firestore'
import postConverter from '../../helpers/postConverter'


const Post: NextPage = () => {
  const router = useRouter()
  const docRef = doc(db, 'posts', String(router.query.id)).withConverter(postConverter)
  const[post] = useDocumentData(docRef)

  
  return (
    <div>
      <h1>Страница поста {router.query.id}</h1>
      <button onClick={() => router.push('/posts')}>Список постов</button>
    </div>
  )
}

export default Post