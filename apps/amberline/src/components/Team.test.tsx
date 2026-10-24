import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders four cards with portraits, names and roles', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Qualified Engineers')
    expect(screen.getByText('Team & Staff')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Lionel Wurtchbach, Site Director' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Bea Alam' })).toBeInTheDocument()
    expect(screen.getAllByText('Quantity Surveyor')).toHaveLength(1)
  })

  it('exposes three labelled social links per member', () => {
    render(<Team />)
    expect(screen.getAllByRole('link', { name: /on Twitter$/ })).toHaveLength(4)
    expect(screen.getByRole('link', { name: 'John Buffer on Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com/',
    )
  })
})
