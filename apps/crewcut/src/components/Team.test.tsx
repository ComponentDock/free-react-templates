import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and four member cards with names and roles', () => {
    render(<Team />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Experienced Mentor Team' }),
    ).toBeInTheDocument()
    const members = [
      ['Ethel Davis', 'Managing Director (Sales)'],
      ['Rodney Cooper', 'Creative Art Director (Project)'],
      ['Dora Walker', 'Senior Core Developer'],
      ['Lena Keller', 'Creative Content Developer'],
    ] as const
    for (const [name, role] of members) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByText(role)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
