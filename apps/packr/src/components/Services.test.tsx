import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /what i do/i })).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /web design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /web development/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /help & support/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Marketing$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /digital marketing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /web strategy/i })).toBeInTheDocument()
  })
})
