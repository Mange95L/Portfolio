import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'



const IndexPage = () => {

    return (
        <Layout>
            <h1>Hej!</h1>
            <h2>Mitt namn är Magnus, Jag är en driven full-stack utvecklare som bor i Göteborg.</h2>

            <h3>Tekniker: </h3>

            <p><strong>Språk: </strong></p>
            <span className="badge">C#</span>
            <span className="badge">PHP</span>
            <span className="badge">JavaScript</span>
            <span className="badge">SQL</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>

            <p><strong>Ramverk: </strong></p>
            <span className="badge">.NET</span>
            <span className="badge">.NET CORE</span>
            <span className="badge">React</span>
            <span className="badge">Aurelia</span>
            <span className="badge">Jquery</span>
            <span className="badge">Sass</span>
            <span className="badge">Less</span>
            <span className="badge">Entity Framework</span>
            <span className="badge">Nhibernate</span>

            <p><strong>Arbetssätt: </strong></p>
            <span className="badge">SCRUM</span>
            <span className="badge">TDD</span>
            <span className="badge">CD</span>
            <span className="badge">CI</span>


            {/* <p><strong>Språk: </strong><span className="badge">C#</span> <span className="badge">PHP</span> <span className="badge">JavaScript</span> <span className="badge"> SQL</span> <span className="badge">HTML</span> <span className="badge"> CSS</span></p>
            <p><strong>Ramverk: </strong>.NET, .NET CORE, React, Aurelia, Jquery, Sass & Less</p>
            <p><strong>Arbetssätt: </strong>SCRUM, TDD, continuous development</p> */}


        </Layout>
    )

}

export default IndexPage


// https://www.youtube.com/watch?v=8t0vNu2fCCM&t=20s
// Tid in i tutorialen:  4:25:49
