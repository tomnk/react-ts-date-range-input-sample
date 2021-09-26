import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const renderCustomHeader = ({
  monthDate,
  customHeaderCount,
  decreaseMonth,
  increaseMonth,
  ...rest
}) => {
  console.log(monthDate, customHeaderCount, decreaseMonth, increaseMonth, rest);
  return (
    <div>
      <button
        type="button"
        aria-label="Previous Month"
        className="react-datepicker__navigation react-datepicker__navigation--previous"
        style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
        onClick={decreaseMonth}
      >
        <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
          {'<'}
        </span>
      </button>
      <span className="react-datepicker__current-month">
        {monthDate.toLocaleString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
      </span>
      <button
        type="button"
        aria-label="Next Month"
        className="react-datepicker__navigation react-datepicker__navigation--next"
        style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
        onClick={increaseMonth}
      >
        <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
          {'>'}
        </span>
      </button>
    </div>
  );
};

export const DateInput = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" className="date-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <>
      <DatePicker
        renderCustomHeader={renderCustomHeader}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable
        monthsShown={2}
        customInput={<CustomDateInput />}
      />
    </>
  );
};
