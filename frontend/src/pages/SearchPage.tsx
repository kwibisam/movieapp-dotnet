import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchPage() {
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  return (
    <div>
      Search Page
      <p>{sp.get('query')}</p>
    </div>
  );
}
