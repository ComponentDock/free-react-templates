import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { name: 'Bookkeeping Consulting Agency' }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Hero />)

    expect(
      screen.getByText(
        'Professional financial solutions for your business. We help you manage your finances with expertise and dedication.',
      ),
    ).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('has proper ARIA attributes', () => {
    render(<Hero />)

    const section = screen
      .getByRole('heading', { name: 'Bookkeeping Consulting Agency' })
      .closest('section')
    expect(section).toHaveAttribute('id', 'home')
  })
})
