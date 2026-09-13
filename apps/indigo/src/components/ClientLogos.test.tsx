import { render, screen } from '@testing-library/react'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders all client logos', () => {
    render(<ClientLogos />)
    expect(screen.getByAltText('Acme Corp logo')).toBeInTheDocument()
    expect(screen.getByAltText('Globex logo')).toBeInTheDocument()
    expect(screen.getByAltText('Initech logo')).toBeInTheDocument()
    expect(screen.getByAltText('Umbrella logo')).toBeInTheDocument()
    expect(screen.getByAltText('Hooli logo')).toBeInTheDocument()
  })
})
