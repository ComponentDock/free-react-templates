import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /welcome to portlight hotel/i })).toBeInTheDocument()
  })

  it('renders hotel name', () => {
    render(<About />)
    expect(screen.getByText(/harbor lights hotel/i)).toBeInTheDocument()
  })

  it('renders subheading about home feeling', () => {
    render(<About />)
    expect(screen.getByText(/it feels like staying in your own home/i)).toBeInTheDocument()
  })

  it('renders reserve CTA link', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: /reserve your room now/i })
    expect(link).toHaveAttribute('href', '#rooms')
  })

  it('renders about image', () => {
    render(<About />)
    expect(screen.getByAltText(/harbor lights hotel/i)).toHaveAttribute(
      'src',
      expect.stringContaining('portlight-about'),
    )
  })
})
