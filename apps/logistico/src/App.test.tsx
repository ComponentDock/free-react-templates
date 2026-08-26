import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Logistico — Logistics Template')
  })

  it('renders all major landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the navbar brand link', () => {
    render(<App />)
    const brandLink = screen.getByRole('link', { name: /Logistico/i })
    expect(brandLink).toBeInTheDocument()
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Truly Global/i)
  })

  it('renders services section', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    const serviceHeading = headings.find((h) => h.textContent?.includes('Our Services'))
    expect(serviceHeading).toBeInTheDocument()
  })

  it('renders about section', () => {
    render(<App />)
    expect(screen.getByText('10+')).toBeInTheDocument()
  })

  it('renders contact section', () => {
    render(<App />)
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
