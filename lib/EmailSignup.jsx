import React from 'react'

/* istanbul ignore if */
if (process.env.BROWSER) {
  require('./EmailSignup.styl') // eslint-disable-line global-require
}

const FooterEmail = () => (
  <div className="footer-email">
    <h2>Sign up for exclusive offers and inspiration</h2>
    <div>
      <div id="footer-email" className="footer-email-form">
        <form
          id="footer-email-form"
          method="post"
          action="https://em.art.com/pub/rf"
        >
          <div className="error">Please enter a valid email address</div>
          <input
            name="email_address_"
            id="footer-email-input"
            className="input"
            placeholder="Enter email address"
            type="text"
          />
          <input className="button" value="Sign Up" type="submit" />
          <input name="country_iso2" value="" type="hidden" />
          <input name="language_iso2" value="en" type="hidden" />
          <input name="site_domain" value="art.com" type="hidden" />
          <input name="email_acq_source" value="01-000001" type="hidden" />
          <input
            name="email_acq_date"
            value=""
            id="footer-email-date"
            type="hidden"
          />
          <input name="brand_id" value="ART" type="hidden" />
          <input
            name="_ri_"
            value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk"
            type="hidden"
          />
        </form>
      </div>
    </div>
    <div className="footer-email-privacy-policy" />
  </div>
)

export default FooterEmail
