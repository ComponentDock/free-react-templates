import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders the green NEW tag, eyebrow, headline and shop button', () => {
    render(<Banner />)
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /striped shirts/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#latest')
  })
})
