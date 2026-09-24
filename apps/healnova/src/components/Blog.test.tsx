import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading and post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /News & Updates/i })).toBeInTheDocument()
    expect(screen.getAllByText(/We.*Providing the Quality Care/i)).toHaveLength(3)
  })
})
