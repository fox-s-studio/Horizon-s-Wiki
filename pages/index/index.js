import React from 'react'
import Head from 'next/head'
import Styled from 'styled-components'
import Image from '../../components/icon'
import illustration from '../../public/img/login/Illustration_login.png'
import '../../styles/shared/index.scss'

const Container = Styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
  height: 100vh;
`

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>

      <Image height="100%" width="100%" imgSrc={illustration}/>
      <div></div>
    </Container>
  </>
)

export default Home
