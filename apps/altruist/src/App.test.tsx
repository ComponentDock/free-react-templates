import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Altruist — Charity & Donation')
  })

  it('renders every section in the original order', () => {
    const { container } = render(<App />)

    /* Sections render in the source order (header → hero → causes →
       experience → condition → donation banner → donation form → brand
       logos → events → footer). Only direct children of <main> carry
       section ids. */
    const ids = [...container.querySelectorAll('main > [id]')].map((node) => node.id)
    expect(ids).toEqual(['home', 'causes', 'about', 'donation', 'events', 'contact'])

    /* The hero + both condition slides share the "New way to give back"
       headline (the original is an owl carousel of two identical slides). */
    expect(screen.getAllByRole('heading', { level: 1, name: 'New way to give back' })).toHaveLength(
      3,
    )
    expect(screen.getByRole('heading', { level: 2, name: 'Our Major Causes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Donate to help People Around the World' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()

    /* Both donation forms render (hero box + overlapping banner box). */
    expect(screen.getAllByRole('button', { name: 'Donate Now' })).toHaveLength(2)
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })

  it('exposes the fixed header, main landmark, and footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
