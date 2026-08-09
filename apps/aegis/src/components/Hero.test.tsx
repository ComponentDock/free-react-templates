import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, blurb, CTAs and hero stats', () => {
    render(<Hero />)
    expect(screen.getByText('Trusted by 2,000+ Security Teams Worldwide')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Stop Threats Before They Strike/,
    )
    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Demo' })).toBeInTheDocument()
    expect(screen.getByText('10M+')).toBeInTheDocument()
    expect(screen.getAllByText('Endpoints Protected').length).toBeGreaterThan(0)
    expect(screen.getByText('500B+')).toBeInTheDocument()
    expect(screen.getAllByText('Events Analyzed').length).toBeGreaterThan(0)
    expect(screen.getByText('0.001%')).toBeInTheDocument()
    expect(screen.getAllByText('False Positive Rate').length).toBeGreaterThan(0)
    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getAllByText('SOC Coverage').length).toBeGreaterThan(0)
  })

  it('renders the threat dashboard mockup with stats and detections', () => {
    render(<Hero />)
    expect(screen.getByText('Threat Dashboard')).toBeInTheDocument()
    expect(screen.getByText('All Systems Protected')).toBeInTheDocument()
    expect(screen.getByText('2,847')).toBeInTheDocument()
    expect(screen.getByText('14,329')).toBeInTheDocument()
    expect(screen.getByText('Low')).toBeInTheDocument()
    expect(screen.getByText('Score: 12/100')).toBeInTheDocument()
    expect(screen.getByText('Recent Detections')).toBeInTheDocument()
    expect(screen.getByText('Ransomware attempt blocked')).toBeInTheDocument()
    expect(screen.getByText('endpoint-ws042 · 2 min ago')).toBeInTheDocument()
    expect(screen.getByText('Critical')).toBeInTheDocument()
    expect(screen.getByText('Suspicious login from new location')).toBeInTheDocument()
    expect(screen.getByText('user: j.smith · 8 min ago')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Vulnerability patched automatically')).toBeInTheDocument()
    expect(screen.getByText('CVE-2026-1847 · 23 min ago')).toBeInTheDocument()
    expect(screen.getByText('Resolved')).toBeInTheDocument()
  })
})
