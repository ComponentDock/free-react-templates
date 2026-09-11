import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Roadmap } from './Roadmap'

describe('Roadmap', () => {
  it('shows roadmap heading and milestones', () => {
    render(<Roadmap />)
    expect(screen.getByRole('heading', { name: 'Development Roadmap' })).toBeInTheDocument()
    expect(screen.getByText('Concept & Whitepaper')).toBeInTheDocument()
    expect(screen.getByText('Team Recruitment')).toBeInTheDocument()
    expect(screen.getByText('Core Development')).toBeInTheDocument()
    expect(screen.getByText('Main Launch')).toBeInTheDocument()
  })
})
