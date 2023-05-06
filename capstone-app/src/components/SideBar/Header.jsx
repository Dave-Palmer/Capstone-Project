import { Typography } from '@mui/material'
import React from 'react'
import { useProSidebar } from 'react-pro-sidebar';
import { SBox } from '../StyledComponents';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';



export const Header = ({ page }) => {
    const { collapseSidebar, toggleSidebar, toggled, broken } = useProSidebar();
    let boxWidth;
    if (toggled && !broken) { boxWidth = 'calc(100vw - 300px)' }
    else if (toggled && broken) { boxWidth = '100vw' }
    else if (!toggled && !broken) { boxWidth = 'calc(100vw - 85px)' }
    else if (!toggled && broken) { boxWidth = '100vw' }
    return (
        <SBox sx={{ width: boxWidth }} >
            <MenuRoundedIcon
                onClick={() => { collapseSidebar(); toggleSidebar() }}
                sx={{
                    fontSize: 40,
                    color: 'rgb(59, 96, 100)'
                }}
            />
            <Typography sx={{ fontFamily: 'Roboto' }} ml='30px' color='rgb(59, 96, 100)' variant='h4' >{page}</Typography>
        </SBox>
    )
}
