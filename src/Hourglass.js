import React from 'react';
import { formatSeconds, formatTimerValues } from './utils';

function Hourglass(props) {
  const { showTimer, remainingSeconds } = props;
  const { hours, minutes, seconds } = formatSeconds(remainingSeconds);
  const formatted = formatTimerValues(hours, minutes, seconds);
  return (
    <div>
      Hourglass
      {showTimer && `${formatted.hours}:${formatted.minutes}:${formatted.seconds}`}
    </div>
  );
}

export default Hourglass;
