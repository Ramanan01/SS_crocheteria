import React from 'react'
import {Container,Typography,Grid,Button} from "@material-ui/core"

const Cart = ({cart}) => {
    const isEmpty=!cart.list_items.length

    const EmptyCart = () =>(
        <Typography variant="subtitle1">You have no items in your cart. Start adding some</Typography>
    )

    const FilledCart = () => (
        <>
           <Grid container spacing={3}>
               {cart.line_items.map()
           </Grid>
        </>
    )


    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            {isEmpty? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}
import {Container,Typography,Grid,Button} from "@material-ui/core"

export default Cart
