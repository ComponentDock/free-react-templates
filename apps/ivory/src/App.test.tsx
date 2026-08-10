import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Ivory — Personal Blog')
  })

  it('composes the top bar, branding, navbar, hero, blog list, sidebar and footer', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ivory')
    expect(screen.getByText('Personal Blog')).toBeInTheDocument()
    expect(screen.getAllByRole('searchbox')).toHaveLength(1)
    expect(
      screen.getByRole('link', { name: 'Subscribe to my YouTube channel' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "I'm Amelia Smith" })).toBeInTheDocument()
    expect(screen.getByRole('list', { name: 'Instagram feed' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
