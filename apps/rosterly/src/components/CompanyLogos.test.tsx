import { render, screen } from '@testing-library/react'
import { CompanyLogos } from './CompanyLogos'

describe('CompanyLogos', () => {
  it('renders section heading', () => {
    render(<CompanyLogos />)
    expect(screen.getByText(/Company We/)).toBeInTheDocument()
  })

  it('renders company logo images', () => {
    render(<CompanyLogos />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('renders alt text for logos', () => {
    render(<CompanyLogos />)
    expect(screen.getByAltText('Spotify logo')).toBeInTheDocument()
    expect(screen.getByAltText('Google logo')).toBeInTheDocument()
  })
})
