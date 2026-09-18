import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Company Insights' })).toBeInTheDocument()
  })

  it('renders Our Insights label', () => {
    render(<Blog />)
    expect(screen.getByText('Our Insights')).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: 'The Future of Coworking Spaces' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Designing Productive Workspaces' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Community Building in Shared Spaces' }),
    ).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('renders blog excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/flexible work environments/)).toBeInTheDocument()
  })
})
