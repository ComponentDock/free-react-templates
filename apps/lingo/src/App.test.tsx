import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the header', () => {
    render(<App />)
    expect(screen.getAllByText('Lingo').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /learn languages easily/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /our courses/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /meet our team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /courses for free/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /upcoming events/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /from our blog/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
