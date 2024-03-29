import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from "../../assets/navicon.png";
import useStyles from "./styles"
const Navbar = ({totalItems}) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.AppBar} color="inherit" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt='SS_Crocheteria' height='25px' className={classes.image}/>
                        SS Crocheteria  
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                            
                        </IconButton>
                    </div>
                </Toolbar>

            </AppBar>
        </div>
    )
}
export default Navbar
