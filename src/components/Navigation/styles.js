import styled from '@emotion/styled'
import { Link } from 'gatsby'


import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: white;
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  max-width: 500px;

`

export const LogoWrapper = styled.div`
  width: 100%;
  padding: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 700px;
`


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  /* padding: 1.45rem; */
  margin: 0 0;
  width: 100%;
`

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  padding: 0px 50px 50px 50px;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

    
     
        
          
            
              