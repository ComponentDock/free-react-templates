import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { footer } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the wordmark, description and circular social icons', () => {
    const { container } = render(<Footer />)
    expect(screen.getByRole('link', { name: /Pitchside/i })).toBeInTheDocument()
    expect(screen.getByText(footer.description)).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Youtube', 'Linkedin']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(container.querySelector('footer')).not.toBeNull()
  })

  it('renders the Top Club and Recent News widgets', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'Top Club' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.topClub[0] })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent News' })).toBeInTheDocument()
    expect(screen.getByText(footer.recentNews[0].title)).toBeInTheDocument()
    expect(screen.getByText(footer.recentNews[0].date)).toBeInTheDocument()
  })

  it('links Component Dock in the copyright bar with policy links', () => {
    const { container } = render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(container.textContent).toContain('Copyright')
    expect(container.textContent).toContain('More templates at')
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Use' })).toBeInTheDocument()
  })
})
