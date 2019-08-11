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

                
<div className="aroundtheform">
        <form ref={this.domRef} name="Contact Form" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)}>
          <input ref="form-name" type="hidden" name="form-name" value="Contact Form" />
            <div className="row">
                <div className="col-25">
                    <label htmlFor="email">Email</label>
                </div>
                <div className="col-75">
                    <input ref="email" id="email" type="email" name="email" className="emailinput" />
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="subject">Meddelande</label>
                    </div>
                    <div className="col-75">
                        <textarea ref="message" id="subject" name="message" className="txtrea" />
                    </div>
                </div>
                <div className="row">
          <input type="submit" value="Skicka" />
          </div>
        </form>
        {this.state.feedbackMsg && <p>{this.state.feedbackMsg} </p>}
        </div>
        <br></br>
        <h1></h1>
            <h4>Enklaste sättet att nå mig är att via formuläret ovan, eller mina kontaktuppgifter nedan: </h4>
            <p><strong>Telefon: </strong>0725225334</p>
            <p><strong>Mail: </strong>magnus.landen@hotmail.com</p>
            <p><a className="customLinkStyles" href="https://www.linkedin.com" target="_blank"><strong>LinkedIn</strong></a>, <a className="customLinkStyles" href="https://www.facebook.com" target="_blank"><strong>Facebook</strong></a> </p>
            </Layout>
        )
    }
}

export default contactFormPage