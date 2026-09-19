import { render, screen } from '@testing-library/react'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders six client logos', () => {
    render(<ClientLogos />)
    const logos = screen.getAllByAltText(/Client partner/)
    expect(logos.length).toBe(6)
  })
})
