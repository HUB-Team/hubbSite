import Link from 'next/link'
import Sidebar from '../Components/Sidebar'

export default class Team extends React.Component {
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
                <a className="page-title1">Our Team</a>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Link href="/horos">
                  <div className="card blue-grey darken-2">
                    <div className="card-content white-text">
                      <span className="card-title">Horos Grigorii</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                               tempor incididunt ut labore et dolore magna aliqua.
                               </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col s12 m6">
                <Link href="/bumbu">
                  <div className="card blue darken-2">
                    <div className="card-content white-text">
                      <span className="card-title">Bumbu Tudor</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                               tempor incididunt ut labore et dolore magna aliqua.
                               </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <Link href="/ungur">
                  <div className="card orange darken-2">

                    <div className="card-content white-text">

                      <span className="card-title">Ungur Stefan</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                               tempor incididunt ut labore et dolore magna aliqua.
                               </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col s12 m6">
                <Link href="/bostan">
                  <div className="card brown darken-2">
                    <div className="card-content white-text">
                      <span className="card-title">Bostan Ion</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                               tempor incididunt ut labore et dolore magna aliqua.
                               </p>
                    </div>
                  </div>
                </Link>
              </div>
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
          .container .nav-wrapper1 {
            text-align: center;
            padding-top: 80px;
          }
  `}</style>
      </div>

    )
  }
}
