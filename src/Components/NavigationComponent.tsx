import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';

const actions = [
  { icon: <RestaurantMenuIcon />, name: "Categories" },
];

const navigateToDict: {[key: string]: string} = {
  "Categories": '/',
}

export default function NavigationSpeedDial() {
  const navigate = useNavigate()
  const navigateTo = (destiny: string) => {
    const path:string = navigateToDict[destiny]
    return navigate(path)
  }

  return (
    <Box sx={{ position: 'fixed', bottom: 16, left: 16, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Menu"
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => navigateTo(action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}