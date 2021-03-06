import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import DFLogo from '../../images/die-for-logo.jpeg'

import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	MenuLink,
	Logo,
	LogoWrapper,
	Wrapper
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
		<Wrapper>
			<LogoWrapper className='logo-banner'>
				<Logo src={DFLogo} alt='Die For' />
			</LogoWrapper>
			<Container>
				<MenuLink to='/'>
					<h1>Die For</h1>
				</MenuLink>
				<MenuLink to='/cart'>
					{hasItems &&
						<CartCounter>
							{quantity}
						</CartCounter>
					}
					Cart 🛍
				</MenuLink>
			</Container>
		</Wrapper>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
