import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Episodes } from './Episodes'

describe('Episodes', () => {
  it('renders the featured episode with meta, title, guest, and description', () => {
    render(<Episodes />)
    expect(screen.getByText('Latest Episode')).toBeInTheDocument()
    expect(screen.getByText('EP. 247')).toBeInTheDocument()
    expect(screen.getAllByText('Feb 18, 2026').length).toBeGreaterThan(0)
    expect(screen.getAllByText('58 min').length).toBeGreaterThan(0)
    const heading = screen.getByRole('heading', { level: 2, name: /The Zero-to-\$100M Blueprint/ })
    expect(heading).toBeInTheDocument()
    expect(screen.getAllByText(/Nadia Reyes, Founder of Stackline/).length).toBeGreaterThan(0)
    expect(screen.getByText(/bootstrapped Stackline from a weekend prototype/)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Featured episode artwork' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/soundbite-featured/800/520',
    )
  })

  it('shows tag badges on the featured card', () => {
    render(<Episodes />)
    expect(screen.getByText('Startup')).toBeInTheDocument()
    expect(screen.getByText('Bootstrapping')).toBeInTheDocument()
    expect(screen.getByText('Growth')).toBeInTheDocument()
  })

  it('renders the Recent Episodes heading and subtitle', () => {
    render(<Episodes />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Recent Episodes' })
    expect(heading).toBeInTheDocument()
    expect(screen.getByText(/Catch up on the latest conversations/)).toBeInTheDocument()
  })

  it('renders 6 episode cards with a Listen link each', () => {
    render(<Episodes />)
    const listenLinks = screen.getAllByRole('link', { name: /Listen/ })
    // 6 card links; "Listen Latest Episode"/"Listen Now" live in other components
    const cardLinks = listenLinks.filter((link) => link.textContent?.trim().startsWith('Listen'))
    expect(cardLinks).toHaveLength(6)
    const list = screen.getAllByRole('list').find((l) => within(l).queryByText('EP.246'))
    expect(list).toBeDefined()
    expect(within(list as HTMLElement).getAllByRole('listitem')).toHaveLength(6)
  })

  it('cards carry EP number, date, duration, title, guest, and blurb', () => {
    render(<Episodes />)
    expect(screen.getByText('EP.246')).toBeInTheDocument()
    expect(screen.getByText('Finding Product-Market Fit in 90 Days')).toBeInTheDocument()
    expect(screen.getByText('Omar Haddad, CEO of Fitloop')).toBeInTheDocument()
    expect(screen.getByText(/exact framework Fitloop used/)).toBeInTheDocument()
    expect(screen.getAllByText('45 min').length).toBeGreaterThan(0)
  })

  it('shows the View All Episodes button', () => {
    render(<Episodes />)
    expect(screen.getByRole('link', { name: /View All Episodes/ })).toBeInTheDocument()
  })
})
