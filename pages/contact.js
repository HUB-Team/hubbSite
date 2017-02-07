import Link from 'next/link'
import Sidebar from '../Components/Sidebar'

export default class Contact extends React.Component {
  render () {
    return (
      <div>
        <header>
          <Sidebar />
        </header>
        <main>
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper1">
                <a className="page-title1">Contact Us </a>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row" id="contact-row-margin-top">
              <div className="col m10 offset-m1 s12">
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col m6 s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name">Full Name</label>
                      </div>
                      <div className="input-field col m6 s12">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" className="validate" required />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="message" className="materialize-textarea" data-length="3000" ref="message" />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col m12">
                        <p className="right-align">
                          <button className="btn btn-large waves-effect waves-light purple" type="button" name="action">
                              Send Message
                            </button>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </main>
        <footer >
          <div className="footer-copyright">
            <div className="container center">
                  Made by <Link className="purple" href="/team">HUBB Team</Link>
            </div>
          </div>
        </footer>
        <style jsx >{`
          footer {
            position: 'fixed';
            right: 0;
            bottom: 0;
            left: 0;
            'padding-top': '1rem';
            'padding-bottom': '1rem';
            'background-color': '#efefef';
            'text-align': 'center';
          }
          .input-field input[type=text]:focus + label {
               color: purple;
             }
          .input-field input[type=text]:focus {
            border-bottom: 1px solid purple;
            box-shadow: 0 1px 0 0 purple;
          }
          .input-field input[type=text].valid {
            border-bottom: 1px solid purple;
            box-shadow: 0 1px 0 0 purple;
          }
          .input-field input[type=email]:focus + label {
            color: purple;
          }
          .input-field input[type=email]:focus {
          border-bottom: 1px solid purple;
          box-shadow: 0 1px 0 0 purple;
          }
          .input-field input[type=email].invalid {
            border-bottom: 1px solid red;
            box-shadow: 0 1px 0 0 red;
          }
          .input-field input[type=email].valid {
            border-bottom: 1px solid purple;
            box-shadow: 0 1px 0 0 purple;
          }
          #message:focus + label {
            color: purple;
          }
          #message:focus {
          border-bottom: 1px solid purple;
          box-shadow: 0 1px 0 0 purple;
          }
          #message:active {
          border-bottom: 1px solid purple;
          box-shadow: 0 1px 0 0 purple;
          }
          .material-icons.prefix.active{
                color: purple;
              }
          .checkbox-purple[type="checkbox"] + label:before{
            border: 2px solid purple;
            background: transparent;
          }
          .checkbox-purple[type="checkbox"]:checked + label:before{
            border: 2px solid transparent;
            border-bottom: 2px solid purple;
            border-right: 2px solid purple;
            background: transparent;
          }
          .container .nav-wrapper1 {
            text-align: center;
            padding-top: 80px;
          }
        `}</style>
      </div>

    )
  }
  componentDidMount () {
    $(this.refs.message).characterCounter()
  }
}
