 import React, { useEffect } from 'react'
 import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 
'pk.eyJ1IjoibGJhcm5lczg2IiwiYSI6ImNreG9ibm5oNjR6aGcydHFobXA1MjBoeWsifQ.kR4MGbtL0niOCl2-JqLjsg';
 
 const Map = () => {
    useEffect(() => {
  
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3,
        })

        const marker1 = new
       
       });

     return (
         <Wrapper id='map'>
             
         </Wrapper>
     )
 }
 
 export default Map

 const Wrapper = tw.div`
 flex-1
 `
 