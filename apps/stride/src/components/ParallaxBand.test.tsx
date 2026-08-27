import { render, screen } from '@testing-library/react'
import { ParallaxBand } from './ParallaxBand'

describe('ParallaxBand', () => {
  it('renders the headline', () => {
    render(<ParallaxBand headline="Test Headline" seed="test-seed" />)
    expect(screen.getByText('Test Headline')).toBeInTheDocument()
  })

  it('renders the Get Started link', () => {
    render(<ParallaxBand headline="Test" seed="test" />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('renders the background image with correct seed', () => {
    render(<ParallaxBand headline="T" seed="my-seed" />)
    const section = screen.getByText('T').closest('section')!
    expect(section.style.backgroundImage).toContain('my-seed')
  })
})
