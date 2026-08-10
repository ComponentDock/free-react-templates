import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { heroTitle, navItems, posts, testimonials, testimonialsLabel } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Rivulet — Photography Blog')
  })

  it('composes all sections in landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    for (const post of posts) {
      expect(screen.getByRole('region', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getByRole('region', { name: testimonialsLabel })).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()
  })

  it('opens the full-screen menu from the header', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Menu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: navItems[0] })).toBeInTheDocument()
  })
})
