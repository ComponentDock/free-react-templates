import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline and an appointment call to action', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Beauty & Spa Wellness/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Make An Appointment/i })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('img', { name: /spa wellness/i })).toBeInTheDocument()
  })
})
