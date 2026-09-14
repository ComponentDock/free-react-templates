import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtext', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /Attorneys Fighting For Your Freedom/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/expert legal representation/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Make an Appointment/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('renders the hero background image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /Law firm office/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/statute-hero/1920/1080')
  })
})
