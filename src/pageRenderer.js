import React from 'react';
import { useMatch } from 'react-router-dom';

const generatePage = (page) => {
  const component = () => require(`./pages/${page}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    console.warn(err);
  }
  return React.createElement(() => '404');
};

export default function PageRenderer() {
  const match = useMatch('/:page');

  return generatePage(match ? match.params.page : 'Not found');
}
