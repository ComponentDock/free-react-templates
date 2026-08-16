import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Latest Blog label, Tips & Tricks heading and two cards', () => {
    const { container } = render(<Blog />)

    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Tips & Tricks' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2)
    expect(screen.getAllByText('21 Mar 2021')).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(2)
    expect(container.querySelectorAll('img')).toHaveLength(2)
  })
})
