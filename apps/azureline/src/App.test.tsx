import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full template', () => {
    render(<App />)
    expect(screen.getAllByText('Azureline').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Introducing')).toBeInTheDocument()
    expect(screen.getByText('Responsive View')).toBeInTheDocument()
    expect(screen.getByText('We Offered')).toBeInTheDocument()
    expect(screen.getByText('Latest Works')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Azureline — Business Template')
  })

  it('has the Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
