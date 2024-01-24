import React from 'react';
import { PuffLoader } from 'react-spinners';

function Loading() {
  return (
    <div className='flex h-screen justify-center text-center items-center'>
      <PuffLoader size={30} color="#ff6347" />
    </div>
  );
}

export default Loading;
