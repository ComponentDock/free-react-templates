import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to our')).toBeInTheDocument()
    expect(screen.getByText(/Clean, Modern, Multipurpose Theme/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<Hero />)
    const img = document.querySelector('img[src*="constructo-hero"]')
    expect(img).toBeInTheDocument()
  })
})
