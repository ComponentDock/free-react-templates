import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('JobScout')).toBeInTheDocument()
    expect(screen.getByText('Find the most exciting startup jobs')).toBeInTheDocument()
    expect(screen.getByText('Browse Top Categories')).toBeInTheDocument()
    expect(screen.getByText('Make a Difference with Your Online Resume!')).toBeInTheDocument()
    expect(screen.getByText('Featured Jobs')).toBeInTheDocument()
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('Margaret Lawson')).toBeInTheDocument()
    expect(screen.getByText('24k Talented people are getting Jobs')).toBeInTheDocument()
    expect(screen.getByText('Our recent news')).toBeInTheDocument()
  })

  it('has Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
