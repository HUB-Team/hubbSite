import Link from 'next/link'

export default class Sidebar extends React.PureComponent {
    static async getInitialProps ({ req }) {
    return { client: !!req.headers['user-agent']  }
  }

  render () {
    return (
      <div>
        <div className="container">
          <a data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only">
            <i className="material-icons">menu</i>
          </a>
        </div>
        <ul id="nav-mobile" className="side-nav fixed">
          <li className="logo">
            <Link href="/"><a><img src="/static/logo/hubbteam.png" alt="My Logo" /></a></Link>
          </li>
          <li>
            <ul className="collapsible active" data-collapsible="accordion" ref="collapsible">
              <li>
                <div className="collapsible-header"><i className="material-icons purple-text">group_work</i>Team</div>
                <div className="collapsible-body" style={{padding: '0 10px'}} >
                  <ul className="active">
                    <li><Link href="/horos"><a>Grigorii Horos</a></Link></li>
                    <li><Link href="/bumbu"><a>Tudor Bumbu</a></Link></li>
                    <li><Link href="/ungur"><a>Stefan Ungur</a></Link></li>
                    <li><Link href="/bostan"><a>Ion Bostan</a></Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </div>
    )
  }
  componentDidMount () {
    if(this.props.client){
    $('.button-collapse').sideNav()
    $(this.refs.collapsible).collapsible({
      accordion: false,
      onOpen: function (el) { },
      onClose: function (el) { return false }

    })
  }
  }

}
