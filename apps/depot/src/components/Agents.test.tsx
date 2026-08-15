import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Agents } from './Agents'
import { agents } from '../data'

describe('Agents', () => {
  it('renders the heading, subtext and three agent cards with role', () => {
    render(<Agents />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Real Estate Agents' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit/),
    ).toBeInTheDocument()
    for (const agent of agents) {
      expect(screen.getByRole('heading', { level: 3, name: agent.name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Real Estate Agent')).toHaveLength(3)
    expect(screen.getByAltText('Portrait of Allison Holmes')).toBeInTheDocument()
    expect(screen.getByAltText('Portrait of Ben Thompson')).toBeInTheDocument()
  })
})
