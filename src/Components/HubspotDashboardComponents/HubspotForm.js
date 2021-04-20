import React from 'react';
import Cookies from 'js-cookie';
import md5 from 'md5';

class HubspotForm extends React.Component {
    // renders hubspot form for first time users
    constructor() {
        super();
        this.state = {
          optOutCookie: Cookies.get("__hs_cookie_cat_pref")
        };
      }
    componentDidMount() {
        // remove the opt-out cookie so the cookie banner is rendered with the hubspot form
        if (this.state.optOutCookie) {
            Cookies.remove('__hs_cookie_cat_pref');
          };
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);
      
        script.addEventListener('load', () => {
          if(window.hbspt) {
            window.hbspt.forms.create({
                region: "na1",
                portalId: "4376150",
                formId: "0c64bc32-b9aa-4319-9915-d9d9b70ce3f1",
                target: "#hubspotForm"
          })
        }
      });
      // if the form is submitted, add a cookie to allow user to content page
      window.addEventListener('message', EventTarget => {
        if (EventTarget.data.type === 'hsFormCallback' && EventTarget.data.eventName === 'onFormSubmitted') {
          Cookies.set('_hs_form_submitted', md5("hubspot form submitted"), {expires: 365, path: '/'})
        }
      })
    }
    
      render() {
        return (
                <div id="hubspotForm"></div>            
      );
    }
  }

export default HubspotForm