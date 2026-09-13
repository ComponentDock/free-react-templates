import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Services we offer/i })).toBeInTheDocument()
  })

  it('renders both service cards', () => {
    render(<Services />)
    expect(screen.getByText('Cloth laundry')).toBeInTheDocument()
    expect(screen.getByText('Cloth ironing')).toBeInTheDocument()
  })

  it('renders service images', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
