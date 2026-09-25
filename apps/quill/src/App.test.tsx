import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByText('Quill')).toBeInTheDocument()
    expect(screen.getByText('Best Seller Book Of The Week')).toBeInTheDocument()
    expect(screen.getByText('About The Book')).toBeInTheDocument()
    expect(screen.getByText("What's Inside The Book")).toBeInTheDocument()
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Kind Words From Readers')).toBeInTheDocument()
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Quill — Author & Book Template')
  })
})
