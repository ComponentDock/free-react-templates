import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Alex Forger')).toBeInTheDocument()

    // About
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument()

    // Skills
    expect(screen.getByRole('heading', { name: /My Skills/i })).toBeInTheDocument()

    // What I Do
    expect(
      screen.getByRole('heading', { name: /Strategy, design and a bit of magic/i }),
    ).toBeInTheDocument()

    // Hire Me
    expect(screen.getByText(/Available/)).toBeInTheDocument()

    // Projects
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()

    // Contact
    expect(screen.getByRole('heading', { name: /Contact Me/i })).toBeInTheDocument()
  })
})
