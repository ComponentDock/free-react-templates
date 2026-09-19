import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Let's Study Together/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#courses')
  })
})
