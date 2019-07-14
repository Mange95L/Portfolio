import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'



const IndexPage = () => {

    return (
        <Layout>
            <h1>Hej!</h1>
            <h4>Mitt namn är Magnus, Jag är en driven full-stack utvecklare som bor i Göteborg.</h4>





            {/* <p><strong>Språk: </strong><span className="badge">C#</span> <span className="badge">PHP</span> <span className="badge">JavaScript</span> <span className="badge"> SQL</span> <span className="badge">HTML</span> <span className="badge"> CSS</span></p>
            <p><strong>Ramverk: </strong>.NET, .NET CORE, React, Aurelia, Jquery, Sass & Less</p>
            <p><strong>Arbetssätt: </strong>SCRUM, TDD, continuous development</p> */}

            <ol className={indexStyles.posts}>
                <li className={indexStyles.post}>
                    <Link to={`/about`}>
                        <h2>Mina skills</h2>
                        <p>Läs mer ingående om mina skills</p>
                    </Link>
                </li>


            </ol>




        </Layout>
    )

}

export default IndexPage


// https://www.youtube.com/watch?v=8t0vNu2fCCM&t=20s
// Tid in i tutorialen:  4:25:49
