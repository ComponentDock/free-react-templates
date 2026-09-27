import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section title and all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Content Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Social Media Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Brand & Logo Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Social Media Advertising' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Email Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Web Design & Development' })).toBeInTheDocument()
  })

  it('has 6 service icons', () => {
    const { container } = render(<Services />)
    const icons = container.querySelectorAll('svg')
    expect(icons.length).toBe(6)
  })
})
