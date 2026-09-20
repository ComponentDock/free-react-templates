import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText(/Change Your Mind/)).toBeInTheDocument()
    expect(screen.getByText('About Conference')).toBeInTheDocument()
    expect(screen.getByText(/Who's Speaking/)).toBeInTheDocument()
    expect(screen.getByText('Our Schedule')).toBeInTheDocument()
    expect(screen.getByText('Ticket Pricing')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Convene — Conference Event Template')
  })
})
