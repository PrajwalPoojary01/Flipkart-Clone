import { useEffect } from "react";
import { Fragment } from "react";

//Components
import NavBar from "./NavBar";
import Poster from "./Poster";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import {Box, styled} from '@mui/material';

import { getProducts } from "../../redux/actions/productActions";
//import { get } from "mongoose";
import { useDispatch, useSelector } from "react-redux";

const Component=styled(Box)`
    padding:10px 10px;
    background: #F2F2F2;
`

const Banner=()=>{
    const {products} = useSelector(state => state.getProducts)
    console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getProducts())
    },[dispatch])
    return(
        //we cannot retrun more than 1 parent class so we use fragment to wrap them 
        //Fragment can be defined as empty <> or <Fragment>
        <>
        
             <NavBar />
             <Component>
             <Poster />
             <MidSlide products={products} title="Deal of the day" timer={true}/>
             <MidSection />
             <Slide products={products} title="Discounts for You" timer={false}/>
             <Slide products={products} title="Suggested Items" timer={false}/>
             <Slide products={products} title="Top Selection" timer={false}/>
             <Slide products={products} title="Recommended Items" timer={false}/>
             <Slide products={products} title="Trending Offers" timer={false}/>
             <Slide products={products} title="Season's top picks" timer={false}/>
             <Slide products={products} title="Top Deals on Accessories" timer={false}/>
             </Component>
       </>
    )
}

export default Banner;