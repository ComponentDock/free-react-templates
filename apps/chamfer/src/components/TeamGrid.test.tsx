import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TeamGrid } from './TeamGrid'

describe('TeamGrid', () => {
  it('renders the team heading', () => {
    render(<TeamGrid />)
    expect(screen.getByRole('heading', { name: /Meet Our Team/i })).toBeInTheDocument()
  })

  it('renders three team members with names and roles', () => {
    render(<TeamGrid />)
    expect(screen.getByText('Jhon Sunsa')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Maria Lane')).toBeInTheDocument()
    expect(screen.getByText('Lead Designer')).toBeInTheDocument()
    expect(screen.getByText('Alex Rivera')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
  })
})
