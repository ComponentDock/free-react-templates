import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders the heading, eyebrow and tier labels', () => {
    render(<Sponsors />)
    expect(screen.getByText('Our Partners')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Proudly Sponsored By' })).toBeInTheDocument()

    for (const tier of [
      'Platinum Sponsors',
      'Gold Sponsors',
      'Silver Sponsors',
      'Community Partners',
    ]) {
      expect(screen.getByText(tier)).toBeInTheDocument()
    }
  })

  it('renders all sponsor names grouped by tier', () => {
    render(<Sponsors />)
    for (const name of [
      'TechCorp',
      'CloudScale',
      'DataFlow',
      'SecureNet',
      'DevTools Inc',
      'StartupHub',
      'CodeCraft',
      'InnovateLab',
      'TechMedia',
      'DevCommunity',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders the Become a Sponsor callout with both CTAs', () => {
    render(<Sponsors />)
    expect(screen.getByRole('heading', { name: 'Become a Sponsor' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download sponsorship kit/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact sponsorship team/i })).toBeInTheDocument()
  })
})
