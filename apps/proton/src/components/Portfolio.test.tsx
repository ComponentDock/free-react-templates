import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders four project images', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('displays project titles', () => {
    render(<Portfolio />)
    for (const title of ['Brand Identity', 'Web Platform', 'Mobile App', 'E-Commerce']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })
})
