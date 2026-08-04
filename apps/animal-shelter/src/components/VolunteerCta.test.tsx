import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VolunteerCta } from './VolunteerCta'

describe('VolunteerCta', () => {
  it('renders the volunteer heading and both action buttons', () => {
    render(<VolunteerCta />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'Want to help? Become a Volunteer',
    )
    expect(screen.getByRole('button', { name: 'View pdf details' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Register now' })).toBeInTheDocument()
  })
})
