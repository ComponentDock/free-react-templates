import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { bannerHeading, miningNewsTitle, popularPostsTitle, recentNewsTitle } from './data'

describe('App', () => {
  it('composes every section on a single page with the document title', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    for (const title of [recentNewsTitle, miningNewsTitle, popularPostsTitle]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: bannerHeading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download for free/i })).toBeInTheDocument()

    expect(document.title).toBe('Bullion — Crypto News Template')
  })
})
