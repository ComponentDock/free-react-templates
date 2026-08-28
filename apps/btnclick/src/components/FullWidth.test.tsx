import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FullWidth } from './FullWidth'

describe('FullWidth', () => {
  it('renders the section heading', () => {
    render(<FullWidth />)
    expect(screen.getByRole('heading', { name: /Full width button/i })).toBeInTheDocument()
  })

  it('renders a full-width button', () => {
    render(<FullWidth />)
    const button = screen.getByRole('button', { name: /Full width button/i })
    expect(button).toBeInTheDocument()
    expect(button.className).toContain('w-full')
  })

  it('button uses the primary color variant', () => {
    render(<FullWidth />)
    const button = screen.getByRole('button', { name: /Full width button/i })
    expect(button.className).toContain('bg-primary')
  })

  it('button has pill shape', () => {
    render(<FullWidth />)
    const button = screen.getByRole('button', { name: /Full width button/i })
    expect(button.className).toContain('rounded-full')
  })
})
