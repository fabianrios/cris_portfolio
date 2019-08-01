import React from 'react'
import PropTypes from 'prop-types'
// import EducationStyles from './Education.sass'

export const Education = ({ degrees, className }) => (
  <ul className={className}>
    {degrees.map(degree => (
      <li key={degree.title}>
        <span className="date">{degree.date}</span>
        <div className="info">
          <p>{degree.title}</p>
          <b>{degree.institution}</b>
        </div>
      </li>
    ))}  
  </ul>
)

Education.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default Education
