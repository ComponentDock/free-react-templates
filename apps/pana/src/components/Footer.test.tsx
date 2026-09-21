import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeDefined()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect((link as HTMLAnchorElement).href).toBe('https://www.componentdock.com/')
  })

  it('opens Component Dock link in new tab', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect((link as HTMLAnchorElement).target).toBe('_blank')
    expect((link as HTMLAnchorElement).rel).toContain('noopener')
  })
})
