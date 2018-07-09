import React from 'react'
import {connect} from "react-redux";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'


class StatisticsPage extends React.Component {
  handleChange(event) {
    const { target: { name, value } } = event
    this.props.onEditStat({ name, value })
  }
  render() {
    return (
      <div>
        Статистика
        <Input name="stat" onChange={e => this.handleChange(e)} value={this.props.statistics.stat} />
      </div>
    )
  }
}

export default connect(
  state => ({
    statistics: state.statistics,
  }),
  dispatch => ({
    onEditStat: (data) => {
      dispatch({ type: 'CHANGE_STATISTICS', payload: data })
    },
  }),
)(StatisticsPage)
