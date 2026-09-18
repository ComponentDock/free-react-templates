import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and subheading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /capturing every angle/i })).toBeInTheDocument()
    expect(screen.getByText(/professional aerial photography/i)).toBeInTheDocument()
  })

  it('renders the CTA button linking to services', () => {
    render(<Hero />)
    const btn = screen.getByRole('link', { name: /explore services/i })
    expect(btn).toHaveAttribute('href', '#services')
  })

  it('displays the section label', () => {
    render(<Hero />)
    expect(screen.getByText(/drone photography & videography/i)).toBeInTheDocument()
  })
})
