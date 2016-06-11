var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
      <p className="text-center">The temp is {temp} in {location}</p>
  );
}

module.exports = WeatherMessage;
