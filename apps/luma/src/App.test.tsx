import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the navbar with brand name', () => {
    render(<App />)
    expect(screen.getByLabelText('Luma')).toBeDefined()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText('Nature')).toBeDefined()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect((link as HTMLAnchorElement).href).toBe('https://www.componentdock.com/')
  })
})
