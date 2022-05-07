import React, { useState, ChangeEvent, SyntheticEvent } from 'react';

export interface IUseValidators {
  validators: string;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (evt: SyntheticEvent<Element, Event>) => void;
}

export default function useValidators(): IUseValidators {
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

    const finalSanitized = Array.from(
      new Set(
        validators
          .replace(/[^0-9,]/g, '')
          .split(',')
          .map((x) => parseInt(x))
          .filter((x) => !!x)
          .sort((a, b) => a - b)
      )
    );
    setValidators(finalSanitized.join(', '));
    alert(finalSanitized);
  }
  return { validators, handleChange, handleSubmit };
}
