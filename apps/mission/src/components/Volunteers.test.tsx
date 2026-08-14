import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { socialLabels, socials, volunteers } from '../data'
import { Volunteers } from './Volunteers'

describe('Volunteers', () => {
  it('renders the section title and 4 volunteer cards with names and roles', () => {
    render(<Volunteers />)

    expect(screen.getByRole('heading', { name: 'We Serve For Peoples' })).toBeInTheDocument()

    for (const volunteer of volunteers) {
      expect(screen.getByRole('heading', { name: volunteer.name })).toBeInTheDocument()
    }
    // Three cards share the plain "Volunteer" role; one is "Volunteer & Donor".
    expect(screen.getAllByText('Volunteer')).toHaveLength(3)
    expect(screen.getByText('Volunteer & Donor')).toBeInTheDocument()
  })

  it('renders a hover social overlay on every card', () => {
    const { container } = render(<Volunteers />)

    const overlays = container.querySelectorAll('.translate-y-full')
    expect(overlays).toHaveLength(volunteers.length)

    const links = screen.getAllByRole('link', { name: /Facebook|Twitter|Instagram/ })
    expect(links).toHaveLength(volunteers.length * socials.length)
    for (const name of socials) {
      expect(screen.getAllByRole('link', { name: socialLabels[name] })).toHaveLength(
        volunteers.length,
      )
    }
  })

  it('does not navigate when a volunteer social link is clicked', () => {
    render(<Volunteers />)
    fireEvent.click(screen.getAllByRole('link', { name: 'Facebook' })[0]!)
    expect(window.location.hash).toBe('')
  })
})
