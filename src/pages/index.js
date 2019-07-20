import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'



const IndexPage = () => {

    return (
        <Layout>
            <h1>Hej &#128075;</h1>
            <h4>Mitt namn är Magnus, Jag är 23 år, full-stack utvecklare som bor i Göteborg och arbetar i Stenungsund.</h4>







            <ol className={indexStyles.posts}>
                <li className={indexStyles.post}>
                    <Link to={`/about`}>
                        <h2>Kompetens</h2>
                        <p>Läs mer ingående om mina kunskaper inom Systemutveckling</p>
                    </Link>
                </li>


            </ol>




        </Layout>
    )

}

export default IndexPage


// https://www.youtube.com/watch?v=8t0vNu2fCCM&t=20s
// Tid in i tutorialen:  4:25:49
