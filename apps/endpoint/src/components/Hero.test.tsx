import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, blurb, CTAs, stats, and terminal window', () => {
    render(<Hero />)

    expect(screen.getByText('Trusted by 1M+ developers worldwide')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Ship Better APIs Faster/)
    expect(screen.getByText(/The complete API infrastructure platform/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Get Free API Key' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Documentation' })).toBeInTheDocument()

    for (const stat of ['1M+', '50B+', '99.999%', '200+']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
    expect(screen.getByText('Developers')).toBeInTheDocument()
    expect(screen.getByText('API Calls/mo')).toBeInTheDocument()
    expect(screen.getByText('Uptime')).toBeInTheDocument()
    expect(screen.getByText('SDKs')).toBeInTheDocument()

    // Terminal window
    expect(screen.getByText(/npm install -g @endpoint\/cli/)).toBeInTheDocument()
    expect(screen.queryByText(/apiforge init/)).not.toBeInTheDocument()
    expect(screen.getByText(/endpoint init my-api/)).toBeInTheDocument()
    expect(screen.getByText(/curl https:\/\/api\.example\.com\/v1\/health/)).toBeInTheDocument()
  })
})
