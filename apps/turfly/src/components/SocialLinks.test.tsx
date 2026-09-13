import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders social media links', () => {
    render(<SocialLinks />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('has correct href attributes', () => {
    render(<SocialLinks />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'X' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', '#')
  })

  it('renders SVG icons', () => {
    const { container } = render(<SocialLinks />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs).toHaveLength(3)
  })
})
