import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spaces } from './Spaces'

describe('Spaces', () => {
  it('renders 3 space cards', () => {
    render(<Spaces />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('renders overlay text', () => {
    render(<Spaces />)
    const headings = screen.getAllByText(/Spaces that you'd love/)
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders pricing info', () => {
    render(<Spaces />)
    expect(screen.getAllByText(/Starting from \$500/)).toHaveLength(3)
  })

  it('renders explore button', () => {
    render(<Spaces />)
    const buttons = screen.getAllByRole('link', { name: /explore more spaces/i })
    expect(buttons).toHaveLength(3)
  })
})
