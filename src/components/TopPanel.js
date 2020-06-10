import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import VolumeController from './VolumeController';

import { makeStyles } from '@material-ui/core/styles';
export default function TopPanel(props) {

    const useStyles = makeStyles( () => ({
        root: {
            overflowY: 'hidden'
        },
      }));

    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false
    });
    const toggleDrawer = (toggleBoolean) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, open: toggleBoolean });
    };
    return (
        <div>
            <button className="controllerButton openPanelButton" onClick={toggleDrawer(true)}>Settings</button>
            <Drawer PaperProps={ { className: classes.root } } anchor="top" open={state.open} onClose={toggleDrawer(false)}>
                <VolumeController volume={props.volume} onChangeVolume={props.onChangeVolume} />
            </Drawer>
        </div>
    )
}