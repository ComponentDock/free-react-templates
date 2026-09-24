import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and learn more link', () => {
    render(<About />)
    expect(screen.getByText(/second abundantly/i)).toBeInTheDocument()
    const link = screen.getByText('Learn More')
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('renders subtitle and description', () => {
    render(<About />)
    expect(
      screen.getByText(/give their their without moving were stars called so divide in female/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /give their their without moving were stars called so divide female be moving night may fish him own male created great opportunity/i,
      ),
    ).toBeInTheDocument()
  })
})
