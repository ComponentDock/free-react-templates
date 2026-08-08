import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, blurb, and both CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByText(/Trusted by 10,000\+ developers worldwide/)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Deploy at the Speed of Light/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/developer-first cloud platform/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Start Deploying Free/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Documentation/ })).toBeInTheDocument()
  })

  it('renders the four hero stats', () => {
    render(<Hero />)

    expect(screen.getByText('500K+')).toBeInTheDocument()
    expect(screen.getByText('40+')).toBeInTheDocument()
    expect(screen.getByText('99.99%')).toBeInTheDocument()
    expect(screen.getByText('<50ms')).toBeInTheDocument()
    for (const label of ['Deployments', 'Global Regions', 'Uptime SLA', 'Global Latency']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders the terminal mockup with login and success lines', () => {
    render(<Hero />)

    expect(screen.getByText('$ stratos login')).toBeInTheDocument()
    expect(screen.getByText('Deployment successful!')).toBeInTheDocument()
    expect(screen.getByText('URL: https://myapp.stratos.app')).toBeInTheDocument()
  })
})
