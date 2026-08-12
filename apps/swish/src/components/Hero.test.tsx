import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the split headline, subtext, CTA and image', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Defend')
    expect(heading.textContent).toContain('Dominate')

    expect(screen.getByText(/They are to sea i waters female from lights/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Basketball school illustration/ })).toBeInTheDocument()
  })
})
