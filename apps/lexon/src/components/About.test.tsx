import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about just law/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/dedicated team of legal professionals/i)).toBeInTheDocument()
  })

  it('renders counter stats', () => {
    render(<About />)
    expect(screen.getByText('250+')).toBeInTheDocument()
    expect(screen.getByText('920+')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Winning Cases')).toBeInTheDocument()
  })

  it('renders images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })
})
