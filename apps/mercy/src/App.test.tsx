import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Mercy — Charity & Nonprofit Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Help the poor in need/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Make a Donation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Become a Volunteer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Popular Causes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What People Say About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /From Our Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Meet Our Team/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Best Way to Make a Difference/i }),
    ).toBeInTheDocument()
  })
})
