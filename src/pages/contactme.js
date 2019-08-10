import React from 'react';
import axios from 'axios';
import * as qs from 'query-string';

import Layout from '../components/layout'

class contactFormPage extends React.Component {
    constructor(props) {
        super(props)
        this.domRef = React.createRef()
        this.state = { feedbackMsg: null }
    }

    handleSubmit(event) {
        event.preventDefault()

        const formData = {}
        Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

        const axiosOptions = {
            url: this.props.location.pathname,
            method: 'post',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(formData),
        }

        axios(axiosOptions)
        .then(Response => {
            this.setState({
                feedbackMsg: "Form submitted successfully!",
            })
            this.domRef.current.reset()
        })
        .catch(err => 
            this.setState({
                feedbackMsg: "Form could not be submitted.",
            })
        )
    }

    render() {
        return (
            <Layout>
                <h1>Contact</h1>

                
<div className="aroundtheform">
        <form ref={this.domRef} name="Contact Form" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)}>
          <input ref="form-name" type="hidden" name="form-name" value="Contact Form" />
          <label for="email">Email</label><br></br>
          <input ref="email" id="email" type="email" name="email" />
          <br></br>
          <label for="subject">Meddelande</label>
          <textarea ref="message" id="subject" name="message" />
          
          <input type="submit" value="submit" />
        </form>
        </div>
        {this.state.feedbackMsg && <p>{this.state.feedbackMsg} </p>}



        {/* THE OTHER FORM */}







            </Layout>
        )
    }
}

export default contactFormPage