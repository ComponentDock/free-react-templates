import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome heading, subtitle, and contact button', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/welcome/i)

    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /contact me/i })).toHaveAttribute('href', '#contact')
  })
})
