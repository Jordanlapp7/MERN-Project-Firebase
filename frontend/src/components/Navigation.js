import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="../topics">Topics</Link>
        {/*<Link to="/videogames">Video Games</Link> Removed on firebase host*/}
    </nav>
  );
}

export default Navigation;
