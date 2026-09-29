import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, description, CTA button, and hero image', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We Collect High Quality Leads/)

    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()

    const image = screen.getByRole('img', { name: /seo agency/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
