import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the tag, headline, and Get In Touch button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Specialized Technical Solutions/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get In Touch/i })).toBeInTheDocument()
  })
})
