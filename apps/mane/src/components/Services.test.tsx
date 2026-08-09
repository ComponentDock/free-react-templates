import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Services Menu' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Haircut & Styling' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Beard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Makeup' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Body Treatment' })).toBeInTheDocument()
  })

  it('renders a Read more link for each service card', () => {
    render(<Services />)

    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(4)
  })
})
