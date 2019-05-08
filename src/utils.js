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

export function getTotalSeconds(_hours, _minutes, _seconds) {
  if (typeof hours === 'object') {
    const { hours, minutes, seconds } = _hours;
    return (hours * 60 * 60) + (minutes * 60) + seconds;
  }

  return (_hours * 60 * 60) + (_minutes * 60) + _seconds;
}

export function formatSeconds(_seconds) {
  const hours = Math.floor(_seconds / 3600);
  const minutes = Math.floor(_seconds / 60) % 60;
  const seconds = _seconds % 60;

  return { hours, minutes, seconds };
}
