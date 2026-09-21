import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the menu button', () => {
    render(<App />)
    expect(screen.getByLabelText('Open menu')).toBeDefined()
  })

  it('renders accordion items', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(5)
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect((link as HTMLAnchorElement).href).toBe('https://www.componentdock.com/')
  })
})
