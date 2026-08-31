import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and tagline', () => {
    render(<Footer />)
    expect(screen.getByText('Merry')).toBeInTheDocument()
    expect(screen.getByText(/discover and share/i)).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '#features')
    expect(screen.getByRole('link', { name: 'Showcase' })).toHaveAttribute('href', '#showcase')
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const cdLinks = links.filter((l) => l.getAttribute('href') === 'https://www.componentdock.com/')
    expect(cdLinks.length).toBeGreaterThanOrEqual(1)
    const textLink = cdLinks.find(
      (l) =>
        l.getAttribute('rel') === 'noopener noreferrer' &&
        l.textContent?.includes('Component Dock'),
    )
    expect(textLink).toBeDefined()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })

  it('renders the social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Component Dock website')).toBeInTheDocument()
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })
})
