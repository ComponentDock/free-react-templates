import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Agents } from './Agents'
import { AGENTS, SOCIALS } from '../data'

describe('Agents', () => {
  it('renders the heading and the three agent cards with captions', () => {
    render(<Agents />)

    expect(screen.getByRole('heading', { name: 'Our Agents' })).toBeInTheDocument()

    for (const agent of AGENTS) {
      expect(screen.getByRole('heading', { name: agent.name })).toBeInTheDocument()
      expect(screen.getByText(agent.properties)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `Portrait of ${agent.name}` })).toBeInTheDocument()
    }
  })

  it('renders three circular social buttons per agent', () => {
    render(<Agents />)

    for (const social of SOCIALS) {
      expect(screen.getAllByRole('link', { name: social.label })).toHaveLength(AGENTS.length)
    }
  })
})
