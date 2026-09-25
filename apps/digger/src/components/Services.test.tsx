import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders services section with both service blocks', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Land & Property')).toBeInTheDocument()
    expect(screen.getByText('Surface Mining')).toBeInTheDocument()
  })

  it('renders checkmark lists', () => {
    render(<Services />)
    expect(screen.getByText('Professional Surveying')).toBeInTheDocument()
    expect(screen.getByText('Modern Equipment')).toBeInTheDocument()
  })
})
