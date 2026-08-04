import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, supporting copy, CTA, and a dog illustration', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('We Love')
    expect(screen.getByText('Dogs')).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get In Touch' })).toHaveAttribute('href', '#contact')

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image).toHaveAttribute('alt', '')
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/doglife-hero/)
  })
})
