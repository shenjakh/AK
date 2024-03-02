
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { useNavigate } from 'react-router'; 
import completeData from '../Data/completeData';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const inputProps = {
    placeholder: 'Otsi...',
    value,
    onChange: (_, { newValue }) => setValue(newValue),
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : completeData.filter(
          (item) =>
            item.name.toLowerCase().slice(0, inputLength) === inputValue
      );
  };

  const renderSuggestion = (suggestion) => <div><strong>{suggestion.name}</strong> <p>{suggestion.description}</p></div>;

  const onSuggestionSelected = (_, { suggestion }) => {
    const queryString = `?location=${encodeURIComponent(suggestion.name)}`;
    navigate(`/selected${queryString}`);
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={onSuggestionSelected}
    />
  );
};

export default SearchBar;
