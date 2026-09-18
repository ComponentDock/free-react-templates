import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the section heading', () => {
    render(<Brands />)
    expect(
      screen.getByRole('heading', { name: /brands love to take our services/i }),
    ).toBeInTheDocument()
  })

  it('renders brand logo images', () => {
    render(<Brands />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(8)
  })
})
