import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest From Our Blog/i })).toBeInTheDocument()
  })

  it('renders all blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Building Stronger Communities Together')).toBeInTheDocument()
    expect(screen.getByText('New Policy Proposals for Education')).toBeInTheDocument()
    expect(screen.getByText('Environmental Action Plan Released')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Recognition Ceremony')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Building Stronger Communities Together')).toBeInTheDocument()
    expect(screen.getByAltText('New Policy Proposals for Education')).toBeInTheDocument()
    expect(screen.getByAltText('Environmental Action Plan Released')).toBeInTheDocument()
    expect(screen.getByAltText('Volunteer Recognition Ceremony')).toBeInTheDocument()
  })
})
