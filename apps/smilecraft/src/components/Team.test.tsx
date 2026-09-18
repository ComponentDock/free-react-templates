import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and four team member cards', () => {
    render(<Team />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Meet Our Experienced Dentist' }),
    ).toBeInTheDocument()

    const names = ['Tom Smith', 'Mark Wilson', 'Patrick Jacobson', 'Ivan Dorchsner']
    for (const name of names) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getByText('General Dentistry')).toBeInTheDocument()
    expect(screen.getByText('Orthodontics')).toBeInTheDocument()
    expect(screen.getByText('Oral Surgery')).toBeInTheDocument()
    expect(screen.getByText('Cosmetic Dentistry')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Portrait of Tom Smith/ })).toBeInTheDocument()
  })
})
