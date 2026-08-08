import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and all six feature cards', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { name: /Everything You Need to Build AI Agents/i }),
    ).toBeInTheDocument()
    for (const title of [
      'Agent Builder',
      'Workflow Orchestration',
      'Knowledge Base',
      'Multi-Agent Teams',
      'API Gateway',
      'Monitoring & Observability',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders a blurb for every feature card', () => {
    render(<Features />)
    expect(screen.getByText(/visual builder, custom prompts/i)).toBeInTheDocument()
    expect(screen.getByText(/human-in-the-loop steps/i)).toBeInTheDocument()
    expect(screen.getByText(/answer with context/i)).toBeInTheDocument()
    expect(screen.getByText(/collaborate to tackle complex missions/i)).toBeInTheDocument()
    expect(screen.getByText(/secure, versioned APIs/i)).toBeInTheDocument()
    expect(screen.getByText(/Trace every run, tool call, and token/i)).toBeInTheDocument()
  })
})
