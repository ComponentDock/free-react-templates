import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the heading and three service cards with Read more links', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', {
        name: /This is My Expertise, The Services I'll Provide My Clients/i,
      }),
    ).toBeInTheDocument()

    for (const service of services) {
      const card = screen.getByRole('heading', { name: service.title }).closest('article')
      expect(card).not.toBeNull()
      expect(within(card as HTMLElement).getByText(service.blurb)).toBeInTheDocument()
    }

    const readMore = screen.getAllByRole('link', { name: /read more/i })
    expect(readMore).toHaveLength(3)
    for (const link of readMore) {
      expect(link).toHaveAttribute('href', '#portfolio')
    }
  })

  it('renders the bottom services CTA line with a Contact Me link', () => {
    render(<Services />)

    expect(screen.getByText(/Have any works you want to done by me\?/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Me' })).toHaveAttribute('href', '#contactme')
  })
})
