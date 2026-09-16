import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, subtitle, and CTA button', () => {
    render(<Hero />)

    expect(screen.getByText('Professional Construction Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Advanced/)
    expect(screen.getByRole('link', { name: 'Our Services' })).toBeInTheDocument()
  })

  it('shows a hero background image', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: 'Construction site' })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
