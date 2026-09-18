import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest From Blog')).toBeInTheDocument()
  })

  it('displays all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Founder Defends Site After Shoot')).toBeInTheDocument()
    expect(screen.getByText('Computer Models to Investors Short')).toBeInTheDocument()
    expect(screen.getByText('New Legal Framework Announced')).toBeInTheDocument()
  })

  it('shows Read More links for each post', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('displays dates and comments', () => {
    render(<Blog />)
    expect(screen.getAllByText('Feb 25 2018')).toHaveLength(3)
    expect(screen.getAllByText('1 Comment')).toHaveLength(3)
  })
})
