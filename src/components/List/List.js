import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import ListStyles from './List.sass'

export const List = ({ content, title }) => (
    <div className="global_list">
        <h3 className="title is-3">
            <FormattedMessage id={title} />
        </h3>
        <ul className="work-list">
            {content.map((element, index) => (
            <li key={index}>
                <span className="date-start">{element.startdate}</span>
                <div className="work_content">
                <ul>
                    {element.projects.map((el, index) => (
                    <li key={index}>
                        <b>{el.title}</b>
                        <div className="description">
                        <p>{el.description}</p>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            </li>
            ))}
        </ul>
    </div>
)

List.propTypes = {
  content: PropTypes.node,
  title: PropTypes.string,
}

export default injectIntl(List)
