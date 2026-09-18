import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('We Well Understand Your Intention')).toBeInTheDocument()
    expect(screen.getByText('Make an Appointment')).toBeInTheDocument()
  })

  it('has a link to contact section', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
