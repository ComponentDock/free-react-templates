import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders heading and all trainers', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /expert trainers/i })).toBeInTheDocument()
    expect(screen.getByText('Michael Stone')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('James Rivera')).toBeInTheDocument()
    expect(screen.getByText('Emma Wilson')).toBeInTheDocument()
  })
})
