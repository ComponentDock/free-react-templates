import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('Bites')).toBeInTheDocument()
    expect(screen.getByText(/delicious/i)).toBeInTheDocument()
    expect(screen.getByText('Our Top Rated Dishes')).toBeInTheDocument()
    expect(screen.getByText('Our Favourite Menu')).toBeInTheDocument()
    expect(screen.getByText('Foodbar Galleries')).toBeInTheDocument()
    expect(screen.getByText('What Our Guests Say')).toBeInTheDocument()
    expect(screen.getAllByText('Make Reservation').length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Bites — Food Bar & Restaurant Template')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
