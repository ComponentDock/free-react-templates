import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the about heading and an image', () => {
    render(<About />)
    expect(screen.getByText('About Barber')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /A Smooth Barber Experience/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Barber tools/ })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('shows a call-to-action linking to the appointment section', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
