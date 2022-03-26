//import MoreStories from '../components/more-stories'
//import HeroPost from '../components/hero-post'
//import { getAllPostsForHome } from '../lib/api'
//import { CMS_NAME } from '../lib/constants'
import Container from '../components/container'
import Hero from '../components/hero'
import Testimonals from '../components/testimonals'
import Services from '../components/services'
import CTA from '../components/cta'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../utils/prismicHelpers'

export default function Index({ preview, home }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
            <title>Urban Digital Assets</title>
        </Head>
        <Hero copy={home} />
        <Services copy={home} />
        <Container>
          {/* Media Content */}
        </Container>
        <Testimonals copy={home} />
        <CTA copy={home}/>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const home = await Client().getSingle('home_page')
  
  return {
    props: {
      home
    },
  }
}
