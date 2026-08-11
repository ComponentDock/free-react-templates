import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { skipLabel } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Rekindle — Blog Magazine Template')
  })

  it('renders a skip link pointing to main content', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toHaveAttribute('href', '#main')
  })

  it('lays out the banner, main, and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('orders the sections Navbar, Banner, Blog posts, Pagination, Sidebar, Footer', () => {
    render(<App />)
    const banner = screen.getByRole('region', { name: 'Home banner' })
    const blog = screen.getByRole('region', { name: 'Blog posts' })
    const pager = screen.getByRole('navigation', { name: 'Pagination' })
    const sidebar = screen.getByRole('complementary', { name: 'Sidebar' })
    const main = screen.getByRole('main')
    const footer = screen.getByRole('contentinfo')

    expect(main.contains(banner)).toBe(true)
    expect(banner.compareDocumentPosition(blog) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(blog.compareDocumentPosition(pager) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(pager.compareDocumentPosition(sidebar) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(sidebar.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(within(main).getByRole('region', { name: 'Blog posts' })).toBeInTheDocument()
  })
})
