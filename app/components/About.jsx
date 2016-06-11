var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to the about page.</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - The JavaScript Framework.
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map</a> - The map info source.
        </li>
        <li>
          <a href="https://github.com/shafiquejamal/ReactWeather">Github repo</a> - The github repo.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
