import Link from 'next/link'
import Sidebar from '../Components/Sidebar'

export default class Bostan extends React.Component {
  render () {
    return (
      <div>
        <header>
          <Sidebar />
        </header>
        <main>
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title1">Bostan Ion</a><br />
                <img className="" src="/static/images/bostan2.png" alt="bostan" />
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="subimage">
              <ul className="collapsible" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header"><i className="mdi mdi-account-box small purple-text" />About</div>
                  <div className="collapsible-body">
                    <p className="text">Bostan Ion
                      <span className="right">
                        <Link href="https://facebook.com/"><i className="mdi mdi-facebook-box small purple-text" /></Link>
                        <Link href="https://www.github.com/"><i className="mdi mdi-github-box small purple-text" /></Link>
                        <Link href="https://www.linkedin.com/"><i className="mdi mdi-linkedin-box small purple-text" /></Link>
                      </span></p>
                    <p><span><i className="mdi mdi-account small purple-text" /> Java Developer</span></p>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                    <p><i className="mdi mdi-phone purple-text" /> +373 (60) 111111</p>
                  </div>

                </li>
                <li>
                  <div className="collapsible-header"><i className="mdi mdi-poll-box small purple-text" />Skills</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="mdi mdi-code-not-equal-variant small purple-text" />Projects</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <footer >
          <div className="footer-copyright">
            <div className="container center">
                  Made by <Link className="purple" href="/team"><span>HUBB Team</span></Link>
            </div>
          </div>
        </footer>
        <style jsx>{`
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
          .subimage{
            margin-top:130px;
          }
          .text {
            font-size: 2rem;
            margin: 0;
          }
          @media only screen and (max-width: 992px){.subimage {
            margin-top: 250px;
            }}

  `}</style>
      </div>

    )
  }
  componentDidMount () {
    $(document).ready(function () {
      $('.collapsible').collapsible()
    })
  }
}
