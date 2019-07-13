import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'



const IndexPage = () => {

    return (
        <Layout>
            <h1>Hello</h1>
            <h2>I'm Magnus, a full-stack developer living in beautiful Gothenburg.</h2>
            <p>Want to contact me? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )

}

export default IndexPage


// https://www.youtube.com/watch?v=8t0vNu2fCCM&t=20s
// Tid in i tutorialen:  4:25:49
