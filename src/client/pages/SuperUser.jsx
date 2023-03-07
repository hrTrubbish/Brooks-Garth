import React from 'react';
import StatsList from './components/super_user/StatsList.jsx';

export default function SuperUser() {
  return (
    <div className="h-screen">
      <div className="flex">
        <div className="flex justify-center w-1/2">
          <button type="button" className="bg-garthbeige hover:bg-brown-200 text-garthbrown font-bold py-2 px-4 rounded p-6 m-8 self-center">Start Livestream</button>
        </div>
        <StatsList />
      </div>
    </div>
  );
}
