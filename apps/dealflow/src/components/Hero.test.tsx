import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the trust badge, headline, subtext and call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByText('Trusted by 10,000+ sales teams worldwide')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Close More Deals with\s*AI-Powered CRM/)

    expect(screen.getByText(/modern CRM that helps sales teams/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book a Demo' })).toBeInTheDocument()
  })

  it('renders the stats row', () => {
    render(<Hero />)

    expect(screen.getByText('10K+')).toBeInTheDocument()
    expect(screen.getByText('Teams Worldwide')).toBeInTheDocument()
    expect(screen.getByText('50M+')).toBeInTheDocument()
    expect(screen.getByText('Deals Tracked')).toBeInTheDocument()
    expect(screen.getByText('99.9%')).toBeInTheDocument()
    expect(screen.getByText('Uptime SLA')).toBeInTheDocument()
    expect(screen.getByText('4.9/5')).toBeInTheDocument()
    expect(screen.getByText('User Rating')).toBeInTheDocument()
  })

  it('renders the dashboard mockup with revenue figures and chart bars', () => {
    render(<Hero />)

    expect(screen.getByText('Revenue Pipeline')).toBeInTheDocument()
    expect(screen.getByText('$2.4M')).toBeInTheDocument()
    expect(screen.getByText('+24% this month')).toBeInTheDocument()
    expect(screen.getByText('Live Demo')).toBeInTheDocument()

    for (const bar of ['Qualified', 'Proposal', 'Negotiation', 'Closed Won']) {
      expect(screen.getByText(bar)).toBeInTheDocument()
    }
    expect(screen.getByText('$890K')).toBeInTheDocument()
    expect(screen.getByText('Revenue Generated')).toBeInTheDocument()
  })
})
