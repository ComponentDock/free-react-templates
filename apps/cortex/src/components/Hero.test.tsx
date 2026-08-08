import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, level-1 heading, blurb and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/Trusted by 10,000\+ developers worldwide/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Build Autonomous AI Agents/i,
    )
    expect(screen.getByText(/Design, deploy, and orchestrate/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Start Building Free/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Documentation/i })).toBeInTheDocument()
  })

  it('renders the statistics row', () => {
    render(<Hero />)
    for (const [value, label] of [
      ['100K+', 'Agents Deployed'],
      ['5B+', 'Tasks Completed'],
      ['200+', 'Integrations'],
      ['99.99%', 'Uptime'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders the Python code panel', () => {
    render(<Hero />)
    expect(screen.getByText('agent.py')).toBeInTheDocument()
    expect(screen.getByText(/from cortex import Agent, Tool/i)).toBeInTheDocument()
  })
})
