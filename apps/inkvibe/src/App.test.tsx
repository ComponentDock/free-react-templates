import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getAllByRole('link', { name: /inkvibe/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: /we provide forever/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /about us/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: /what we do/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our latest work/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /meet our artists/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /book your session/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /latest news/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Inkvibe — Tattoo Studio Landing Template')
  })

  it('has a Component Dock link in the footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
