import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { blogPosts, footerCopyright, heroSlides } from './data'

describe('App', () => {
  it('composes every section and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Savor — Food Magazine Blog')
    expect(screen.getByRole('heading', { name: heroSlides[0]!.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: blogPosts[0]!.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByText(footerCopyright, { exact: false })).toBeInTheDocument()
  })
})
