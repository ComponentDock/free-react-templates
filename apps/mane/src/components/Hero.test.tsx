import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, welcome eyebrow, and For Men / For Women split', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'We are professional care for your hair',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Welcome to our Salon')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /For Men/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /For Women/ })).toBeInTheDocument()
  })

  it('links the category CTAs to the booking section', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /For Men/ })).toHaveAttribute('href', '#booking')
    expect(screen.getByRole('link', { name: /For Women/ })).toHaveAttribute('href', '#booking')
  })
})
