import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading and CTA', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /best online learning system/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'read more' })).toBeInTheDocument()
  })

  it('renders subtitle and small heading', () => {
    render(<Hero />)

    expect(screen.getByText(/get started with online courses/i)).toBeInTheDocument()
    expect(screen.getByText(/far far away, behind the word mountains/i)).toBeInTheDocument()
  })

  it('links read more to courses section', () => {
    render(<Hero />)

    const link = screen.getByRole('link', { name: 'read more' })
    expect(link).toHaveAttribute('href', '#courses')
  })

  it('has background image', () => {
    render(<Hero />)

    const section = screen.getByRole('heading', { level: 1 }).closest('section')!
    expect(section.style.backgroundImage).toContain('learnpath-hero')
  })
})
