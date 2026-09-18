import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading and description', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Protecting Your Digital Future',
    )
    expect(screen.getByText(/comprehensive cybersecurity/i)).toBeInTheDocument()
  })

  it('renders Get Started CTA button', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toHaveAttribute('href', '#')
    expect(cta).toHaveClass('bg-brand')
  })

  it('renders subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText('Security & IT Solutions')).toBeInTheDocument()
  })
})
