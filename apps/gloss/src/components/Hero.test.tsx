import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and contact CTA', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { name: /the center of attention/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('img', { name: /featured makeup look/i })).toBeInTheDocument()
  })
})
