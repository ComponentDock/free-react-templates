import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('BookCraft — Author Book Landing')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Meet Your Next Book/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Features Of This Book/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Book Screenshots/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Hello, I'm the Author/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Testimonials From Readers/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Subscribe For New Updates/i })).toBeInTheDocument()
  })
})
