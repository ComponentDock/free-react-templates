import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders six service items with icon, title, and blurb', () => {
    const { container } = render(<Services />)
    expect(screen.getByRole('heading', { name: 'Mechanical Engineering' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Professional Workers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Green Energy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Power Engineering' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Oil & Lubricants' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Power & Energy' })).toBeInTheDocument()
    expect(container.querySelectorAll('[data-service-item]')).toHaveLength(6)
  })

  it('renders the white services card overlapping the hero', () => {
    const { container } = render(<Services />)
    const warp = container.querySelector('[data-services-warp]')
    expect(warp).not.toBeNull()
    expect(warp!.getAttribute('class')).toContain('-mt-')
  })
})
