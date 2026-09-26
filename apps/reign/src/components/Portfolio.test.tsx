import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders portfolio heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Portfolio')
  })

  it('renders six portfolio images', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('renders hover overlay text', () => {
    render(<Portfolio />)
    expect(screen.getAllByText('View Project')).toHaveLength(6)
  })

  it('each portfolio item is a link', () => {
    render(<Portfolio />)
    const links = screen.getAllByText('View Project').map((el) => el.closest('a'))
    expect(links).toHaveLength(6)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#')
    })
  })
})
