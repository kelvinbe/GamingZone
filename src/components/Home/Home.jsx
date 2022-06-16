import React from 'react'
import Land from '../Pages/Land';
import Show from '../Pages/Show';
import ChartSection from '../Pages/ChartSection';
import CountUpSection from '../Pages/CountUpSection';
import FooterContainer from '../Footer/footer';
import SignUp from '../SignUp/SignUp';



export default function Home() {

  const user = localStorage.getItem('profile')
  console.log(user)
  return (
    
    
      <>
      <Land />
      <Show />
      <ChartSection />
      <CountUpSection />
      <FooterContainer />
      </>





  )
}
