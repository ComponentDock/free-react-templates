import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team heading and the first page of members', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Team/i })).toBeInTheDocument()
    for (const name of ['Marcus Hale', 'Priya Raman', 'Tomás Ferreira', 'Elena Vogt']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getByText('Architect')).toBeInTheDocument()
    expect(screen.getByText('Site Manager')).toBeInTheDocument()
  })

  it('advances and steps back through members with the arrows', async () => {
    const user = userEvent.setup()
    render(<Team />)
    await user.click(screen.getByRole('button', { name: 'Next team members' }))
    expect(screen.getByText('David Okafor')).toBeInTheDocument()
    expect(screen.queryByText('Marcus Hale')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous team members' }))
    expect(screen.getByText('Marcus Hale')).toBeInTheDocument()
  })

  it('reveals three social links per member card', () => {
    render(<Team />)
    expect(screen.getAllByLabelText(/on Facebook$/)).toHaveLength(4)
    expect(screen.getAllByLabelText(/on Instagram$/)).toHaveLength(4)
    expect(screen.getAllByLabelText(/on Twitter$/)).toHaveLength(4)
  })
})
