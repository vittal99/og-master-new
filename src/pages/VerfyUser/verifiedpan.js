// import { Grid} from '@mui/material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Verifiedpan = () => {
    const percentage = 66;
    const size = 100;
    return(
        <div  style={{width: size, height: size }}>
                    <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // size:size,
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
        </div>

    );

    };

export default Verifiedpan;
