import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the hotel name heading', () => {
    render(<About />)
    expect(screen.getByText(/Welcome Hibiscus Hotel In Street/)).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/home away from home/)).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<About />)
    const img = screen.getByAltText('Hibiscus Hotel lobby')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('hibiscus-about'))
  })

  it('renders years of experience badge', () => {
    render(<About />)
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })
})
