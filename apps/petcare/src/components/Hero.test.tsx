import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, supporting copy, CTA, and an image', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('We Care Your Pets.')
    expect(screen.getByText(/pets deserve the very best care/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Now' })).toHaveAttribute('href', '#contact')

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/petcare-hero/)
  })
})
