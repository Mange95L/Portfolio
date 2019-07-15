import React from 'react'
import Layout from '../components/layout'



const AboutPage = () => {
    return (
        <Layout>

            <p>Jag arbetar sedan Mars heltid som systemutvecklare på Hogia.</p>

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

            <br /><br />

            <p>Denna sida är en statisk sida genererad med hjälp av en "Static Site Generator" kallad Gatsby.
                Det är i grund och botten ramverket React och således baserat på modern Javascript.</p>
        </Layout>
    )
}

export default AboutPage