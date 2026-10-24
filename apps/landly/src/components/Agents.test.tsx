import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Agents } from './Agents'
import { agents, agentsHeading, socials } from '../data'

describe('Agents', () => {
  it('renders the three agent cards with names and property counts', () => {
    render(<Agents />)
    expect(screen.getByRole('heading', { level: 2, name: agentsHeading })).toBeInTheDocument()

    for (const agent of agents) {
      expect(screen.getByRole('link', { name: agent.name })).toHaveAttribute('href', '#agents')
      expect(screen.getByText(agent.count)).toBeInTheDocument()
      expect(screen.getByAltText(`Portrait of ${agent.name}`)).toBeInTheDocument()
    }
  })

  it('renders the three round social links for every agent', () => {
    render(<Agents />)
    for (const agent of agents) {
      const list = screen.getByRole('list', { name: `${agent.name} social links` })
      const links = within(list).getAllByRole('link')
      expect(links).toHaveLength(socials.length)

      for (const social of socials) {
        expect(
          within(list).getByRole('link', { name: `${agent.name} on ${social.label}` }),
        ).toHaveAttribute('href', social.href)
      }
    }
  })
})
