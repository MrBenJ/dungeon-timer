export function formatTimerValues(_hours, _minutes, _seconds) {

  const hours = ('' + _hours).length === 1
    ? '0' + _hours
    : _hours;

  const minutes = ('' + _minutes).length === 1
    ? '0' + _minutes
    : _minutes;

  const seconds = ('' + _seconds).length === 1
  ? '0' + _seconds
  : _seconds;

  return {
    hours,
    minutes,
    seconds
  };

}
