import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the heading and the three members with roles', () => {
    render(<Team />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Our Architect Team/ }),
    ).toBeInTheDocument()
    expect(screen.getByText('John Wilson')).toBeInTheDocument()
    expect(screen.getByText('Co-Founder / CEO')).toBeInTheDocument()
    expect(screen.getAllByText('David Smith')).toHaveLength(2)
    expect(screen.getAllByText('Architect')).toHaveLength(2)
  })
})
