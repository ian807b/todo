import React from 'react';

export default function Header({ todos }) {
  return (
    <header>
      <ul>
        <li>
          <button>all</button>
        </li>
        <li>
          <button>active</button>
        </li>
        <li>
          <button>completed</button>
        </li>
      </ul>
    </header>
  );
}
