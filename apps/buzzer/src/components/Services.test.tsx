import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('How we can help?')).toBeInTheDocument()
  })

  it('renders 3 service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Business Strategy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Digital Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Brand Consulting' })).toBeInTheDocument()
  })

  it('renders service images', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
