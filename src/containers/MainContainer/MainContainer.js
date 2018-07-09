import React from 'react'
import { Nav, NavItem, NavLink, ListGroup, ListGroupItem  } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      time: '',
    }
  }
  
  componentDidMount(){
    setInterval(() => {
      let time = new Date()
      time = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}`
      
      this.setState({
        time,
      })
    }, 1)
  }
  
  render() {
    const { time } = this.state
    
    return (
      <div className="container">
        <Nav>
          <NavItem>
            <NavLink>
              <Link to="/">
                Профиль
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/statistics">
                Статистика
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
        <div className="row col-12">
          <ListGroup className="col-4">
            <ListGroupItem>{time} - Profile - {this.props.components.profile}</ListGroupItem>
          </ListGroup>
          <div className="col-8">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    components: state.components,
  }),
)(MainContainer)
