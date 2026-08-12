import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the condensed headline and red sub-line', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Join/)
    expect(heading.textContent).toMatch(/now/)
    expect(screen.getByText('get in shape today')).toBeInTheDocument()
  })
})
