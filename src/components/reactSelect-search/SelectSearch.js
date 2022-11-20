import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
];
const SelectSearch = () => {
  return (
    <div style={{ marginTop: '80px' }}>
      <p>select search Lorem ipsum</p>
      <Select options={options} />
    </div>
  );
};

export default SelectSearch;
