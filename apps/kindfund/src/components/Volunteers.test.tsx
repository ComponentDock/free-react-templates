import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Volunteers } from './Volunteers'

describe('Volunteers', () => {
  it('renders the section heading', () => {
    render(<Volunteers />)
    expect(screen.getByText('Our Volunteer')).toBeInTheDocument()
  })

  it('renders all 3 volunteer cards', () => {
    render(<Volunteers />)
    expect(screen.getByText('Sakil Khan')).toBeInTheDocument()
    expect(screen.getByText('Emran Ahmed')).toBeInTheDocument()
    expect(screen.getByText('Sabbir Ahmed')).toBeInTheDocument()
  })

  it('renders volunteer roles', () => {
    render(<Volunteers />)
    const roles = screen.getAllByText('Volunteer')
    expect(roles.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Donor')).toBeInTheDocument()
  })
})
