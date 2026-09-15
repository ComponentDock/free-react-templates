import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows section title, description, and read story button', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /welcome to our church/i })).toBeInTheDocument()
    expect(screen.getByText(/community of believers/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /read story/i })).toBeInTheDocument()
  })

  it('has an image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /church interior/i })).toBeInTheDocument()
  })
})
