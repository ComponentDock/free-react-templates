import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('shows the intro heading and both call-to-action links', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: 'Beauty Anywhere Anytime' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Make An Appointment' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
