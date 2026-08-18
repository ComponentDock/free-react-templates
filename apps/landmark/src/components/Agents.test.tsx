import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Agents } from './Agents'
import { AGENTS } from '../data'

describe('Agents', () => {
  it('renders the heading, four agent cards with photos, social links, names and roles', () => {
    const { container } = render(<Agents />)

    expect(screen.getByRole('heading', { name: 'Our Agents' })).toBeInTheDocument()

    const images = container.querySelectorAll('article img')
    expect(images).toHaveLength(AGENTS.length)

    for (const agent of AGENTS) {
      expect(screen.getByRole('heading', { name: agent.name })).toBeInTheDocument()
      expect(screen.getAllByText(agent.role)).toBeTruthy()
      expect(screen.getByRole('link', { name: `${agent.name} on Facebook` })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `${agent.name} on Twitter` })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `${agent.name} website` })).toBeInTheDocument()
    }
  })

  it('scrolls the agents carousel and disables arrows at the ends', () => {
    const { container } = render(<Agents />)

    const track = container.querySelector('.flex.transition-transform')!
    const prev = screen.getByRole('button', { name: 'Previous agents' })
    const next = screen.getByRole('button', { name: 'Next agents' })

    expect(prev).toBeDisabled()

    fireEvent.click(next)
    expect(track).toHaveStyle({ transform: 'translateX(-33.333333333333336%)' })
    expect(next).toBeDisabled()

    fireEvent.click(prev)
    expect(prev).toBeDisabled()
    expect(next).toBeEnabled()
  })
})
