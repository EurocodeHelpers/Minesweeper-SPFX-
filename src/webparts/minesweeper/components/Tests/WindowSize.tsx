import * as React from 'react';

export const WindowSize = () => {

  React.useEffect(() => {

    function handleResize() {
        alert(`Resized to ${window.innerWidth},${window.innerHeight}`)
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <div>Hello</div>
    ); 
}
