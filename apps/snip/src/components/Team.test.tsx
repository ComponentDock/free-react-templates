import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the heading and two member cards', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Expert Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Marvin Gardens' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tara Zona' })).toBeInTheDocument()
    expect(screen.getAllByText('Cutting Master')).toHaveLength(2)
  })
})
