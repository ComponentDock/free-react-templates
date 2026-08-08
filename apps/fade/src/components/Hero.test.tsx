import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and both call-to-action buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Crafting Style/)
    expect(heading.textContent).toMatch(/Building Confidence/)

    expect(screen.getByRole('link', { name: /Book Appointment/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call \(555\) 741-2580/ })).toBeInTheDocument()
  })
})
