import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack} from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
// import Loogo from 'components/Logo';

//import image
import ogLogo from '../../../../images/ogLogo.png';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={3} alignItems="center" >
      <img
  src={ogLogo}
  alt="Company Logo"
  style={{ width: '100px' }}
/>
        {/* <Loogo /> */}
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
