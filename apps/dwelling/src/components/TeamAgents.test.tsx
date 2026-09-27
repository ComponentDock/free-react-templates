import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TeamAgents } from './TeamAgents'

describe('TeamAgents', () => {
  it('renders the section heading', () => {
    render(<TeamAgents />)
    expect(screen.getByText('Our')).toBeInTheDocument()
    expect(screen.getByText('Agents')).toBeInTheDocument()
  })

  it('renders 3 agent names', () => {
    render(<TeamAgents />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('renders agent roles', () => {
    render(<TeamAgents />)
    expect(screen.getByText('Senior Agent')).toBeInTheDocument()
    expect(screen.getByText('Property Consultant')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Advisor')).toBeInTheDocument()
  })

  it('renders social link buttons', () => {
    render(<TeamAgents />)
    const socialLinks = screen.getAllByRole('link', { name: /social link/i })
    expect(socialLinks.length).toBe(12) // 4 per agent x 3 agents
  })
})
