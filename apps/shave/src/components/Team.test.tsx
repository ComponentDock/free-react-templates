import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Experienced Mentor Team' })).toBeInTheDocument()
  })

  it('renders all four team members', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Ethel Davis' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Rodney Cooper' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Dora Walker' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Lena Keller' })).toBeInTheDocument()
  })

  it('renders roles for each member', () => {
    render(<Team />)
    expect(screen.getByText('Managing Director (Sales)')).toBeInTheDocument()
    expect(screen.getByText('Creative Art Director (Project)')).toBeInTheDocument()
    expect(screen.getByText('Senior Core Developer')).toBeInTheDocument()
    expect(screen.getByText('Creative Content Developer')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    const fbLinks = screen.getAllByLabelText(/on Facebook/)
    expect(fbLinks).toHaveLength(4)
    const twLinks = screen.getAllByLabelText(/on Twitter/)
    expect(twLinks).toHaveLength(4)
    const liLinks = screen.getAllByLabelText(/on LinkedIn/)
    expect(liLinks).toHaveLength(4)
  })
})
