import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest news from our blog')).toBeInTheDocument()
    expect(screen.getByText('News & Blog')).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<Blog />)
    const titles = screen.getAllByText('Work Hard, Party Hard in a Luxury Chalet in the Alps')
    expect(titles).toHaveLength(3)
  })
})
