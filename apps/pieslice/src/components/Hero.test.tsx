import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subtitle, and CTA button', () => {
    render(<Hero />)

    expect(screen.getByText('Best in Town')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Pizza & Pasta')
    expect(screen.getByRole('link', { name: /see today/i })).toHaveAttribute('href', '#menu')
  })
})
