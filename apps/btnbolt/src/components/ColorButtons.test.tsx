import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColorButtons } from './ColorButtons'

describe('ColorButtons', () => {
  it('renders all 18 color buttons', () => {
    render(<ColorButtons />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(18)
  })

  it('renders Primary button', () => {
    render(<ColorButtons />)
    expect(screen.getByRole('button', { name: /primary/i })).toBeInTheDocument()
  })

  it('renders Blue Gray button', () => {
    render(<ColorButtons />)
    expect(screen.getByRole('button', { name: /blue gray/i })).toBeInTheDocument()
  })
})
