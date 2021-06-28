import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import { navigate } from './utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import downChevron from '../images/dropdown-chevron.png'

import './sass/styles.scss'

class Toolbar extends React.Component {
  render() {
    let {
      localizer: { messages },
      label,
    } = this.props

    return (
      <div className="rbc-toolbar">
        <div id="date-nav" className="rbc-btn-group">
          <button
            className="btn secondary"
            type="button"
            onClick={this.navigate.bind(null, navigate.TODAY)}
          >
            {messages.today}
          </button>
          <button
            className="rounded nav-prev"
            type="button"
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="rounded  nav-next"
            type="button"
            onClick={this.navigate.bind(null, navigate.NEXT)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <span className="rbc-toolbar-label">{label}</span>

        <span>
          <span id="timeframe-selector">{this.viewNamesGroup(messages)}</span>
           <select
             className="outlined-clickable secondary"
             style={{
               background: `url(${downChevron})  96% / 18% no-repeat`,
               paddingRight: '30px',
               marginLeft: '2vw',
               zIndex: 100,
             }}
           >
              <option>Sanford</option>
              <option>Atlanta</option>
              <option>Orlando</option>
            </select>
        </span>
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <button
          type="button"
          key={name}
          className={clsx({ 'rbc-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ))
    }
  }
}

Toolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
}

export default Toolbar
