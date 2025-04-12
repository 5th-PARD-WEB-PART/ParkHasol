import Link from 'next/link'
import { useUserStore } from '@/store/userStore'

export default function Home(){
  const name =useUserStore((state)=>state.name)
  const age =useUserStore((state)=>state.age)

  return(
    <>
      <main style={{padding:'2rem', textAlign: 'center'}}>
        <h1>메인 페이지</h1>
        <p>이름: {name}</p>
        <p>나이: {age}</p>

        <Link href="/update"> 정보 수정하러 가기 </Link>
      </main>
    </>
  )
}
