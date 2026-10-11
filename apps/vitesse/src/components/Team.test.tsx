import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders three person cards with photo, name, and role', () => {
    const { container } = render(<Team />)
    expect(screen.getByText('Daniel Reyes')).toBeInTheDocument()
    expect(screen.getByText('Operations Manager')).toBeInTheDocument()
    expect(screen.getByText('Omar Haddad')).toBeInTheDocument()
    expect(screen.getByText('Freight Coordinator')).toBeInTheDocument()
    expect(screen.getByText('Lucas Moretti')).toBeInTheDocument()
    expect(screen.getByText('Customs Specialist')).toBeInTheDocument()
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(3)
  })

  it('renders caption overlays with rising social links per person', () => {
    render(<Team />)
    expect(screen.getByRole('link', { name: 'Daniel Reyes on Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Daniel Reyes on Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Daniel Reyes on LinkedIn' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /on (Twitter|Facebook|LinkedIn)/ })).toHaveLength(9)
    expect(screen.getByText('Daniel Reyes').closest('h3')).toHaveClass('group-hover:text-white')
  })
})
