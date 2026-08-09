import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and the four cutter masters', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Our Cutter Masters' })).toBeInTheDocument()
    for (const name of ['Macau Wilium', 'Dan Jacky', 'Luka Luka', 'Rona Dana']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })
})
