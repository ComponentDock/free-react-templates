import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Agents } from './Agents'
import { agents } from '../data'

describe('Agents', () => {
  it('renders the heading and four agent cards with photo, name and listing info', () => {
    render(<Agents />)
    expect(screen.getByText('Agents')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Agents' })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(agents.length)
    for (const agent of agents) {
      expect(screen.getByRole('img', { name: agent.name })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: agent.name })).toBeInTheDocument()
      expect(screen.getByText(agent.info)).toBeInTheDocument()
    }
  })
})
