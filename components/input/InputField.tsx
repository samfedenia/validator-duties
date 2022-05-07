import React, { useState, useRef, RefObject } from 'react';
import MagnifyingGlass from '../icons/MagnifyingGlass';
import CmdK from '../icons/CmdK';

export default function InputField(): JSX.Element {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const [validators, setValidators] = useState('');

  function sanitizeUserInput(input: string): string {
    return input.replace(/[^0-9\s,]/g, '');
  }
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    const sanitized = sanitizeUserInput(evt.currentTarget.value);
    setValidators(sanitized);
  }
  function handleSubmit(evt: React.SyntheticEvent) {
    evt.preventDefault();
    if (validators == '') return;

    const finalSanitized = validators
      .replace(/[^0-9,]/g, '')
      .split(',')
      .map((x) => parseInt(x))
      .filter((x) => !!x)
      .sort((a, b) => a - b);
    alert(finalSanitized);
  }

  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <div className='h-sm ml-auto mr-auto max-w-lg pb-5 pl-5 pr-5'>
        <label
          htmlFor='search'
          className=' block select-none text-sm font-medium text-gray-700 dark:text-white'
        >
          Validator Indicies
        </label>
        <div className='max-w-1/2 relative mt-1 flex items-center'>
          <input
            required
            ref={inputRef}
            value={validators}
            onChange={handleChange}
            type='text'
            name='search'
            placeholder='e.g. 324, 1559, 10000'
            id='search'
            autoComplete='off'
            className='form-control m-0 block w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 placeholder:italic focus:border-indigo-500 focus:bg-white focus:text-gray-700 focus:outline-none dark:border-gray-500 dark:bg-black dark:text-white dark:placeholder-gray-500 dark:focus:border-indigo-500'
          />
          <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
            <CmdK inputRef={inputRef} />
            <span className='input-group-text font-sm flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base text-gray-700 dark:text-white'>
              <button type='submit' onClick={handleSubmit}>
                <MagnifyingGlass />
              </button>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
