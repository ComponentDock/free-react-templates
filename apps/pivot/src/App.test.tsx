import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('P.')).toBeInTheDocument()
    expect(screen.getByText(/I'm a developer from Berlin/)).toBeInTheDocument()
    expect(screen.getByText('What I Do')).toBeInTheDocument()
    expect(screen.getAllByText('Work').length).toBeGreaterThan(0)
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Lets Talk')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pivot — Developer Portfolio Template')
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
