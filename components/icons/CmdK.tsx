import React, { RefObject, useEffect } from 'react';
import dynamic from 'next/dynamic';

interface Props {
  inputRef: RefObject<HTMLInputElement>;
}
export function CmdK({ inputRef }: Props): JSX.Element {
  function handleKeyDown({ metaKey, key }: KeyboardEvent) {
    if (metaKey && key == 'k') {
      inputRef?.current?.focus();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <kbd
      className='invisible inline-flex items-center rounded border border-gray-300 px-3 py-1.5 font-sans text-sm font-medium text-gray-400 sm:visible'
      onClick={() => inputRef.current?.focus()}
    >
      ⌘K
    </kbd>
  );
}

export default dynamic(() => Promise.resolve(CmdK), {
  ssr: false,
});
