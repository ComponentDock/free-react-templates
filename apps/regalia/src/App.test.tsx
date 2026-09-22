import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the top bar with contact info', () => {
    render(<App />)
    const phones = screen.getAllByText('+1 234 567 890')
    expect(phones.length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Regalia — Luxury Hotel Template')
  })
})
