import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Agents } from './Agents'
import { AGENTS } from '../data'

describe('Agents', () => {
  it('renders the heading, five agent cards with socials and roles', () => {
    render(<Agents />)

    expect(screen.getByRole('heading', { level: 2, name: AGENTS.heading })).toBeInTheDocument()

    for (const agent of AGENTS.items) {
      const card = screen.getByRole('heading', { level: 3, name: agent.name }).closest('div')
      expect(card).not.toBeNull()
      expect(within(card as HTMLElement).getByText(agent.role)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: `${agent.name} on Facebook` })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: `${agent.name} on Twitter` })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: `${agent.name} on Website` })).toBeInTheDocument()
    }
  })

  it('advances and wraps the agents carousel via arrows', async () => {
    const user = userEvent.setup()
    render(<Agents />)

    const track = screen.getByTestId('agents-track')
    expect(track.style.transform).toBe('translateX(-0%)')

    await user.click(screen.getByRole('button', { name: 'Next agents' }))
    expect(track.style.transform).toBe('translateX(-33.333333333333336%)')

    await user.click(screen.getByRole('button', { name: 'Next agents' }))
    expect(track.style.transform).toBe('translateX(-66.66666666666667%)')

    await user.click(screen.getByRole('button', { name: 'Next agents' }))
    expect(track.style.transform).toBe('translateX(-0%)')

    await user.click(screen.getByRole('button', { name: 'Previous agents' }))
    expect(track.style.transform).toBe('translateX(-66.66666666666667%)')
  })
})
