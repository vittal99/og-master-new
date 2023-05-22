// project import

import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
  <SimpleBar
    sx={{
      width:'100%',
      height:'100%',
      backgroundColor:'#0B1522',
      '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column'
        
      }
    }}
  >
    <Navigation />

  </SimpleBar>
);

export default DrawerContent;
