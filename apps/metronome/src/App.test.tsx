import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /pick a date/i })).toBeInTheDocument()
  })

  it('renders the date input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Pick A Date')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has a white page background', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toHaveClass('min-h-screen', 'bg-white')
  })

  it('has generous vertical padding on main', () => {
    render(<App />)
    expect(screen.getByRole('main')).toHaveClass('py-28')
  })
})
