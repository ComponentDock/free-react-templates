import { render, screen } from '@testing-library/react'
import { HeroArt } from './HeroArt'

describe('HeroArt', () => {
  it('renders the illustration with a descriptive accessible name', () => {
    render(<HeroArt />)

    expect(
      screen.getByRole('img', { name: 'Isometric illustration of two server racks beside a cloud' }),
    ).toBeInTheDocument()
  })
})
