import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /Some statistics/i })).toBeInTheDocument()
  })

  it('displays 4 portfolio items', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img', { name: /Interior Structure/i })
    expect(images).toHaveLength(4)
  })

  it('has hover links with aria-labels', () => {
    render(<Portfolio />)
    const viewLinks = screen.getAllByRole('link', { name: /View Interior Structure/i })
    expect(viewLinks).toHaveLength(4)
  })
})
