import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and Get The App button', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/An Amazing App That Does It All/i)

    expect(screen.getByRole('link', { name: /Get The App/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Scroll Down/ })).toBeInTheDocument()
  })
})
