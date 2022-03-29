import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import { display } from '@mui/system';
import { IconButton, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



export default function Header() {

    const [state, setState] = useState({
        mobileView: false
    })

    const {mobileView} = state


    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900 ? 
            setState((prevState) => ({...prevState, mobileView: true})):
            setState((prevState) => ({...prevState, mobileView: false}))
        }

        setResponsiveness()
        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', () => setResponsiveness())
        }

    }, [])

    const displayMobile = () => {
        return (

            <Toolbar>
                <IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                  }}
                
                >
                    <MenuIcon />
                </IconButton>
                <div>
                    "hello"
                </div>
            </Toolbar>
        )
    }

    const displayDesktop = () => {
        return (

            <Toolbar style={{minHeight: 46}}>
                <IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                  }}
                
                >
                    <MenuIcon />
                </IconButton>
                <div>
                    "hello"
                </div>
            </Toolbar>
        )
    }

  return (
    <header>
        
        <AppBar>
            {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
            </header>
  )
}
