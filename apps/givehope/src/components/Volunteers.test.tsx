import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Volunteers } from './Volunteers'

describe('Volunteers', () => {
  it('renders the section title and four volunteer cards', () => {
    render(<Volunteers />)

    expect(screen.getByText('Volunteers')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Expert Volunteers' })).toBeInTheDocument()

    for (const name of ['David Phillips', 'Linda Rudolph', 'Samuel Gardner', 'Rachel Adams']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })

  it('displays role text for each volunteer', () => {
    render(<Volunteers />)

    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Field Supervisor')).toBeInTheDocument()
    expect(screen.getByText('Co-Founder')).toBeInTheDocument()
    expect(screen.getByText('Outreach Lead')).toBeInTheDocument()
  })

  it('has social overlay links for each volunteer', () => {
    render(<Volunteers />)

    const facebookLinks = screen.getAllByRole('link', { name: 'Facebook' })
    expect(facebookLinks.length).toBe(4)
  })
})
