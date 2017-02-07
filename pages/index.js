import Link from 'next/link'
import Sidebar from '../Components/Sidebar'

export default class Main extends React.Component {
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
                <a className="page-title1">HUBB Team</a>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center purple-text">
                    <i className="large material-icons">code</i>
                  </h2>
                  <h5 className="center">Back-End Development</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center purple-text">
                    <i className="large material-icons">dashboard</i>
                  </h2>
                  <h5 className="center">Front-End Development</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center purple-text">
                    <i className="large material-icons">group</i>
                  </h2>
                  <h5 className="center">User Experience Focused</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </p>
                </div>
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
