import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the full template and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Pressbox — News & Magazine Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Secondary' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })
})
