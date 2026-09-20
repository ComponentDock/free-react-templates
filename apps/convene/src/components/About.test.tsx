import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('About Conference')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<About />)
    expect(screen.getByText(/When I first got into the online advertising/)).toBeInTheDocument()
  })

  it('renders all feature items', () => {
    render(<About />)
    expect(screen.getByText('Write On Your Business Card')).toBeInTheDocument()
    expect(screen.getByText('Advertising Outdoors')).toBeInTheDocument()
    expect(screen.getByText('Effective Advertising Pointers')).toBeInTheDocument()
    expect(screen.getByText('Quick Directory Add Url Free')).toBeInTheDocument()
  })

  it('renders Discover Now button', () => {
    render(<About />)
    expect(screen.getByText('Discover Now')).toBeInTheDocument()
  })
})
