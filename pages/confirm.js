 import React from 'react'
 import tw from 'tailwind-styled-components/dist/tailwind'
 import Link from 'next/link'
 
 const Confirm = () => {
     return (
         <Wrapper>
              <BackButtonContainer>
                <Link href='/search' >
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </BackButtonContainer>
            <Map
                
            />
             
         </Wrapper>
     )
 }
 
 export default Confirm
 
 const Wrapper = tw.div`
 flex h-screen flex-col
 `

 const BackButtonContainer = tw.div`
 
 `

 const BackButton = tw.button`
 
 `

