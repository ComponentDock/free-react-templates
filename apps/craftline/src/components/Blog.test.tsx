import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('From the Blog')).toBeDefined()
  })

  it('renders featured post', () => {
    render(<Blog />)
    expect(screen.getByText('Renovating National Gallery: A Design Case Study')).toBeDefined()
  })

  it('renders side posts', () => {
    render(<Blog />)
    expect(screen.getByText('WordPress for Beginners: Getting Started Guide')).toBeDefined()
    expect(screen.getByText('Building Modern Websites from Scratch')).toBeDefined()
  })

  it('renders view all articles button', () => {
    render(<Blog />)
    expect(screen.getByText('View all articles')).toBeDefined()
  })

  it('renders latest articles label', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Articles')).toBeDefined()
  })

  it('renders read article links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read article')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })
})
