import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <h1>Nu blev det änna lite fel</h1>
            <p><Link to="/">Gå hem</Link></p>
        </Layout>
    )
}

export default NotFound