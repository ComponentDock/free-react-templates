import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders section title', () => {
    render(<Sponsors />)
    expect(screen.getByText(/our/i)).toBeInTheDocument()
    expect(screen.getByText(/sponsors/i)).toHaveClass('text-brand')
  })

  it('renders 8 sponsor logos', () => {
    render(<Sponsors />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
  })
})
