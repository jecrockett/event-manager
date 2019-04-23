import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class EventList extends React.Component {
  render() {
    return (
      <section>
        <h2>Events</h2>
        <ul>{this.renderEvents()}</ul>
      </section>
    )
  }

  renderEvents() {
    const { events } = this.props;
    events.sort((a, b) => {
      new Date(b.event_date) - new Date(a.event_date)
    });

    return events.map(event => (
      <li key={event.id}>
        <Link to={`/events/${event.id}`}>
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
}

EventList.defaultPrope = {
  events: [],
}

export default EventList;