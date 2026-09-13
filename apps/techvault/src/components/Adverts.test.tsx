import { render, screen } from '@testing-library/react'
import { Adverts } from './Adverts'

describe('Adverts', () => {
  it('renders advert titles', () => {
    render(<Adverts />)
    expect(screen.getByText('Smartphone Deals')).toBeInTheDocument()
    expect(screen.getByText('Gaming Accessories')).toBeInTheDocument()
  })

  it('renders advert descriptions', () => {
    render(<Adverts />)
    expect(screen.getByText('Up to 40% off on selected models')).toBeInTheDocument()
    expect(screen.getByText('Premium gear for gamers')).toBeInTheDocument()
  })
})
