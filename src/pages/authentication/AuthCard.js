import PropTypes from 'prop-types';

// material-ui
import { Box } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

// const AuthCard = ({ children, ...other }) => (
//   <MainCard
//     sx={{
//       maxWidth: { xs: 400, lg: 475 },
//       margin: { xs: 2.5, md: 3 },
//       '& > *': {
//         flexGrow: 1,
//         flexBasis: '50%'
//       }
//     }}
//     content={false}
//     {...other}
//     border={false}
//     boxShadow
//   >
//     <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
//   </MainCard>
// );

// AuthCard.propTypes = {
//   children: PropTypes.node
// };

// export default AuthCard;




const AuthCard = ({ children, cardWidth, ...other }) => {
  return (
    <MainCard
      sx={{
        maxWidth: cardWidth, // Use the cardWidth prop
        margin: { xs: 2.5, md: 3 },
        '& > *': {
          flexGrow: 1,
          // flexBasis: '50%',
        },
      }}
      content={false}
      {...other}
      border={false}
      boxShadow
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
  );
};

AuthCard.propTypes = {
  children: PropTypes.node,
  cardWidth: PropTypes.object, // Add cardWidth prop type
};

export default AuthCard;

