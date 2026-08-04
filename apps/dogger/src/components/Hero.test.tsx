import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, subtitle, and a dog illustration', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('We Care For')
    expect(screen.getByText('Your Dog')).toBeInTheDocument()
    expect(screen.getByText(/We always try to provide your dog the best/)).toBeInTheDocument()

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image).toHaveAttribute('alt', '')
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/dogger-hero/)
  })
})
