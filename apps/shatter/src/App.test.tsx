import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page layout', () => {
    render(<App />)
    // Banner
    expect(screen.getByLabelText('Featured stories banner')).toBeInTheDocument()
    // Navbar
    expect(screen.getAllByText('SHATTER').length).toBeGreaterThanOrEqual(1)
    // Sections
    expect(screen.getByText("Editors' Picks")).toBeInTheDocument()
    expect(screen.getByText('International News')).toBeInTheDocument()
    expect(screen.getByText('Technology News')).toBeInTheDocument()
    expect(screen.getByText('Exclusive Videos')).toBeInTheDocument()
    expect(screen.getByText('Popular News Feed')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Shatter — Magazine & News Template')
  })
})
