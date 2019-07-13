import React from 'react';
import { formatSeconds, formatTimerValues } from './utils';

function Hourglass(props) {
  const { showTimer, remainingSeconds, totalSeconds } = props;
  const { hours, minutes, seconds } = formatSeconds(remainingSeconds);
  const formatted = formatTimerValues(hours, minutes, seconds);
  return (
    <div>
      <div className="hourglass-time">
        {showTimer
          ? `${formatted.hours}:${formatted.minutes}:${formatted.seconds}`
          : "..."
        }
      </div>
      <div className="hourglass">

        <div className="hourglass-bar"
          style={{ width: (
            ((totalSeconds - remainingSeconds) / totalSeconds) * 100) + '%'
          }}
        />
      </div>
    </div>
  );
}

export default Hourglass;
