import * as React from 'react';
import Avatar from '@mui/material/Avatar';



export default function AvatarName(props) {
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return name.split(' ')[0][0] + name.split(' ')[1][0]
    }

    return (

        <Avatar sx={{
            bgcolor: props.name ? stringToColor(props.name) : {}, height: "150px", width: '150px', fontSize: '50px', margin: '0.5em'
        }}>{props.name ? stringAvatar(props.name) : ''}</Avatar>
    );
}