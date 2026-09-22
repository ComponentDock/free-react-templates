import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and CTA button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        name: /Dedicated to providing the highest quality roofing services/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book an Appointment/i })).toBeInTheDocument()
  })

  it('renders the hero image with alt text', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Professional roofing work/i })).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('#home')).toBeInTheDocument()
  })
})
