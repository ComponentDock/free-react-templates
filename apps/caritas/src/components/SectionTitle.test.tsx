import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the title and caption, left-aligned by default', () => {
    const { container } = render(<SectionTitle title="Our Causes" caption="A short caption" />)

    expect(screen.getByRole('heading', { level: 2, name: /Our Causes/ })).toBeInTheDocument()
    expect(screen.getByText(/A short caption/)).toBeInTheDocument()
    expect(container.firstElementChild).not.toHaveClass('text-center')
  })

  it('renders without a caption', () => {
    render(<SectionTitle title="Title Only" />)

    expect(screen.getByRole('heading', { level: 2, name: /Title Only/ })).toBeInTheDocument()
    expect(screen.queryByText(/A short caption/)).not.toBeInTheDocument()
  })

  it('centers the block when centered is set', () => {
    const { container } = render(<SectionTitle title="Blog Post" centered />)

    expect(container.firstElementChild).toHaveClass('text-center')
  })
})
