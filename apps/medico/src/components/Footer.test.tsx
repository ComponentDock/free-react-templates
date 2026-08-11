import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  copyright,
  exploreLinks,
  exploreTitle,
  footerAboutBlurb,
  newsletterBlurb,
  newsletterPlaceholder,
  newsletterTitle,
  quickLinksTitle,
  resourcesLinks,
  resourcesTitle,
  siteName,
  subscribeConfirmation,
  subscribeLabel,
} from '../data'

describe('Footer', () => {
  it('renders the wordmark, about blurb and social links', () => {
    render(<Footer />)

    expect(screen.getByText(siteName)).toBeInTheDocument()
    expect(screen.getByText(footerAboutBlurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Facebook' })).toBeInTheDocument()
  })

  it('renders the three link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: quickLinksTitle })).toBeInTheDocument()
    // "Department" appears twice in the source Quick Links list.
    expect(screen.getAllByRole('link', { name: 'About us' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Department' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Online payment' })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Careers' })).toHaveLength(1)

    expect(screen.getByRole('heading', { level: 4, name: exploreTitle })).toBeInTheDocument()
    for (const link of exploreLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 4, name: resourcesTitle })).toBeInTheDocument()
    for (const link of resourcesLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders the newsletter widget and confirms subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterBlurb)).toBeInTheDocument()

    await user.type(screen.getByLabelText(newsletterPlaceholder), 'patient@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(subscribeConfirmation)
  })

  it('renders the copyright bar', () => {
    render(<Footer />)

    expect(
      screen.getByText(new RegExp(copyright.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))),
    ).toBeInTheDocument()
    // The credit shares the paragraph with the copyright line.
    expect(screen.getByText((content) => content.includes('Component Dock'))).toBeInTheDocument()
  })
})
