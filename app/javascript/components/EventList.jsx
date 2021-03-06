import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class EventList extends React.Component {
  render() {
    return (
      <section className='eventList'>
        <h2>Events</h2>
        <Link to='/events/new'>New Event</Link>
        <ul>{this.renderEvents()}</ul>
      </section>
    )
  }

  renderEvents() {
    const { activeId, events } = this.props;
    events.sort((a, b) => {
      new Date(b.event_date) - new Date(a.event_date)
    });

    return events.map(event => (
      <li key={event.id}>
        <Link to={`/events/${event.id}`} className={activeId === event.id ? 'active' : ''}>
          {event.event_date}
          {' - '}
          {event.event_type}
        </Link>
      </li>
    ));
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  activeId: PropTypes.number,
}

EventList.defaultProps = {
  events: [],
  activeId: undefined,
}

export default EventList;