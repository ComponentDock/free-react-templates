import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and three member cards with names and roles', () => {
    render(<Team />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We build a strong team of great people',
      }),
    ).toBeInTheDocument()

    for (const name of ['Maya Chen', 'Jonas Weber', 'Ava Patel']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Lead Developer')).toBeInTheDocument()
    expect(screen.getByText('Marketing Lead')).toBeInTheDocument()
  })
})
