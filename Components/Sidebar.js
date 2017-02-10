import Link from 'next/link'

export default class Sidebar extends React.PureComponent {
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
            <Link href="/"><img src="/static/logo/hubbteam.png" alt="My Logo" /></Link>
          </li>
          <li>
            <ul className="collapsible active" data-collapsible="accordion" ref="collapsible">
              <li>
                <div className="collapsible-header"><i className="material-icons purple-text">group_work</i>Team</div>
                <div className="collapsible-body" style={{padding: '0 10px'}} >
                  <ul className="active">
                    <li><Link href="/horos">Grigorii Horos</Link></li>
                    <li><Link href="/bumbu">Tudor Bumbu</Link></li>
                    <li><Link href="/ungur">Stefan Ungur</Link></li>
                    <li><Link href="/bostan">Ion Bostan</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
  componentDidMount () {
    $('.button-collapse').sideNav()
    $(this.refs.collapsible).collapsible({
      accordion: false,
      onOpen: function (el) { },
      onClose: function (el) { return false }

    })
  }

}
