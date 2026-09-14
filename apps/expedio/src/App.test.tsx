import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Expedio — Travel Agency Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Expedio')).toBeInTheDocument()
    expect(screen.getByText(/Travel More To/)).toBeInTheDocument()
    expect(screen.getByText('Our Popular Services')).toBeInTheDocument()
    expect(screen.getByText(/Exploration is really/)).toBeInTheDocument()
    expect(screen.getByText(/We offer worldwide tour/)).toBeInTheDocument()
    expect(screen.getByText('Our client says')).toBeInTheDocument()
    expect(screen.getByText(/Search suitable and affordable plan/)).toBeInTheDocument()
    expect(screen.getByText('From our Blog')).toBeInTheDocument()
    expect(screen.getByText('About Agency')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
