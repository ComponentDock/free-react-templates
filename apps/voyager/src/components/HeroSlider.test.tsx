import { render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide with heading', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Amazing Maldives Tour')).toBeInTheDocument()
    expect(screen.getByText('2 Days Tour')).toBeInTheDocument()
  })

  it('renders all three slides', () => {
    render(<HeroSlider />)
    expect(screen.getByTestId('slide-0')).toBeInTheDocument()
    expect(screen.getByTestId('slide-1')).toBeInTheDocument()
    expect(screen.getByTestId('slide-2')).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<HeroSlider />)
    expect(screen.getByLabelText('Hero slider')).toBeInTheDocument()
  })
})
