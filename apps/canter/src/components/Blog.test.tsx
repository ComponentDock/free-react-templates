import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the section heading and at least three blog posts', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: /Latest News from our Blog/ })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('shows a title, a meta line, and an excerpt for every post', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: /Portable latest Fashion/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Summer Riding Gear/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Equestrian Lifestyle/ })).toBeInTheDocument()
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/).length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText(/Travel, Lifestyle/)).toBeInTheDocument()
  })
})
