import React from 'react';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height:75,
      width:20,
      margin: 0
    },
  }));

const ModyfiedSlider = withStyles({
    root: {
      color: 'grey'
    },
    thumb: { //Circulo
      height: 13,
      width: 13,
      backgroundColor: '#fff',
      border: '2px solid grey',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    track: {
      height: 300,
      borderRadius: 4,
      color:'#afafaf'
    },
    rail: {
      height: 300,
      borderRadius: 4,
      color:'black'
      
    },

  })(Slider);
  const marks = [
    {
      value: 0,
      label: <VolumeDown />,
    },
    {
      value: 100,
      label: <VolumeUp />,
    },
  ];

export default function  VolumeController(props){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ModyfiedSlider orientation="vertical"
                defaultValue={40}
                aria-labelledby="vertical-slider"
                marks={marks} 
                onChange={props.onChangeVolume}/>
        </div>
    )
}