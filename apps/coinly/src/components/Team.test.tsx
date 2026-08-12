import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the title, paragraph and four member cards', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Meet Our Team' })).toBeInTheDocument()
    expect(
      screen.getByText(
        'Our experts in the field of crypto currency can always help you with any of your questions!',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Aaron Ballance' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Jackson Nash' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Melissa Barth' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Katy Abrams' })).toBeInTheDocument()
  })

  it('renders three social circles per member', () => {
    render(<Team />)
    expect(screen.getAllByRole('link', { name: /Facebook|Twitter|LinkedIn/ })).toHaveLength(12)
  })
})
