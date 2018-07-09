import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
import * as profileActions from '../../actions/profileActions'
import * as componentsActions from '../../actions/componentsActions'


class ProfilePage extends Component {
  handleChange(event) {
    const { target: { name, value } } = event
    const { changeProfile } = this.props.profileActions
    changeProfile({ name, value })
  }
  
  componentWillUnmount() {
    const { changeStatus } = this.props.componentsActions
    changeStatus({ name: 'profile', status: 'unmounted' })
  }
  
  componentDidMount() {
    const { changeStatus } = this.props.componentsActions
    changeStatus({ name: 'profile', status: 'mounted' })
  }
  
  render() {
    return (
      <div className="col-6">
        <InputGroup>
          <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
          <Input name="name" onChange={e => this.handleChange(e)} value={this.props.profile.name} />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">Surname</InputGroupAddon>
          <Input name="surname" onChange={e => this.handleChange(e)} value={this.props.profile.surname} />
        </InputGroup>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
})

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(profileActions, dispatch),
  componentsActions: bindActionCreators(componentsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
