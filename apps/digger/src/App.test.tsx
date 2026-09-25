import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByText('Digger')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Digger')).toBeInTheDocument()
    expect(screen.getAllByText('Our Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('About Digger').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    expect(screen.getByText('Press & News')).toBeInTheDocument()
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
