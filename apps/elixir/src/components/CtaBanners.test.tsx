import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanners } from './CtaBanners'

describe('CtaBanners', () => {
  it('renders both CTA cards', () => {
    render(<CtaBanners />)
    expect(screen.getByRole('heading', { name: /Elixir Products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Rated by Experts/i })).toBeInTheDocument()
  })

  it('renders CTA card images', () => {
    render(<CtaBanners />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })

  it('renders descriptive text', () => {
    render(<CtaBanners />)
    expect(screen.getAllByText(/Lorem, ipsum dolor/i).length).toBe(2)
  })
})
