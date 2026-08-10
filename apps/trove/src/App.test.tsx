import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes every section in order', () => {
    render(<App />)
    expect(document.title).toBe('Trove')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('region', { name: 'Top stories' })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'Recent posts' })).toBeInTheDocument()
    expect(within(main).getByRole('navigation', { name: 'Blog pagination' })).toBeInTheDocument()
    expect(within(main).getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
