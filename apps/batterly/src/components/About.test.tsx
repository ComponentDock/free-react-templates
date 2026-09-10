import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('A Simple Way to Eating Delicious')).toBeDefined()
  })

  it('shows the Our Story button', () => {
    render(<About />)
    expect(screen.getByText('Our Story')).toBeDefined()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /freshly baked pastries/i })).toBeDefined()
  })

  it('shows section subtitle', () => {
    render(<About />)
    expect(screen.getByText('Fresh & Delicious')).toBeDefined()
  })
})
