import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Luma Photography/)).toBeDefined()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect((link as HTMLAnchorElement).href).toBe('https://www.componentdock.com/')
  })

  it('opens Component Dock link in new tab', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
  })
})
