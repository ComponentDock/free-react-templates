import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Button #10')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('BtnMatrix — Bootstrap Buttons #10')
  })

  it('renders the Pick Your Style section', () => {
    render(<App />)
    expect(screen.getByTestId('pick-style')).toBeInTheDocument()
  })

  it('renders the Pick Your Color section', () => {
    render(<App />)
    expect(screen.getByTestId('pick-color')).toBeInTheDocument()
  })

  it('renders the Social Grid section', () => {
    render(<App />)
    expect(screen.getByTestId('social-grid')).toBeInTheDocument()
  })

  it('renders the Social Buttons section', () => {
    render(<App />)
    expect(screen.getByTestId('social-buttons')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
