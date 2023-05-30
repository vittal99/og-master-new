// import React from 'react';
// import LinearProgress from '@mui/material/LinearProgress';

// function CircularProgressBar() {
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((previousProgress) => {
//         if (previousProgress === 100) {
//           return 0;
//         }
//         return previousProgress + 5;
//       });
//     }, 750);
//     return () => {
//       clearInterval(timer);
//     };
//   }, [progress]);

//   const color = progress < 25 ? 'red' : progress < 50 ? 'green' : progress < 75 ? 'blue' : 'purple';

//   return (
//     <div>
//       <LinearProgress
//         variant="determinate"
//         value={progress}
//         sx={{
//           width: '100%',
//           height: '100%',
//           backgroundColor: `rgba(${color}, 0.4)`,
//           '& .MuiLinearProgress-bar': {
//             backgroundColor: `${color}`,
//           },
//         }}
//       />
//     </div>
//   );
// }

// export default CircularProgressBar;
// import React, { useState } from 'react';
// import { Rating } from '@mui/material';

// function RatingMeter() {
//   const [value, setValue] = useState(3);

//   return (
//     <Rating
//       value={value}
//       onChange={(event, newValue) => setValue(newValue)}
//     />
//   );
// }

// export default RatingMeter;

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function RatingMeter() {
  const [value, setValue] = useState(60);

  const handleChange = (event) => {
    setValue(parseFloat(event.target.value));
  };

  return (
    <div>
      <Box sx={{ mt: 2 }}>
        <Typography component="legend">Rating Meter</Typography>
        <div
          style={{
            width: '100px', // Adjust the width as desired
            height: '150px', // Adjust the height as desired
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <CircularProgressbarWithChildren
            value={value}
            minValue={0}
            maxValue={100}
            styles={buildStyles({
                strokeLinecap: 'butt',
                trailColor: '#f3f3f3',
                pathColor: value >= 10 && value< 20 ? 'red' :value >= 20 && value < 40 ? "orange ": value >=40 && value<60 ?"#9ACD32": value >=60 && value<80 ?"rgb(255,174,66)":  value >=80 && value<100 ?"green":'#3f51b5',
                textSize: '20px',
              })}
          >
            {/* Put any JSX content in here that you'd like. It’ll be vertically and horizontally centered. */}
            <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
            <div style={{ fontSize: 12, marginTop: -5 }}>
              <strong>{value}%</strong> mate
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography component="legend">Set Rating</Typography>
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={value}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}

export default RatingMeter;






