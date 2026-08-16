import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in order and sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Emporio — Fashion Shop Template')

    const hero = screen.getByRole('region', { name: 'Featured looks' })
    const categories = screen.getByRole('region', { name: 'Shop by category' })
    const trending = screen.getByRole('region', { name: 'Trending products' })
    const testimonial = screen.getByRole('region', { name: 'Customer testimonial' })
    const mayLike = screen.getByRole('region', { name: 'You may like' })
    const blog = screen.getByRole('region', { name: 'Latest news' })
    const services = screen.getByRole('region', { name: 'Why shop with us' })

    expect(hero.compareDocumentPosition(categories) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(
      categories.compareDocumentPosition(trending) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      trending.compareDocumentPosition(testimonial) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      testimonial.compareDocumentPosition(mayLike) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(mayLike.compareDocumentPosition(blog) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(blog.compareDocumentPosition(services) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(
      services.compareDocumentPosition(screen.getByRole('contentinfo')) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()

    expect(screen.getByRole('link', { name: 'Skip to main content' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })
})
