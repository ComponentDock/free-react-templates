import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections with the correct landmarks and document title', () => {
    render(<App />)

    expect(document.title).toBe('Morsel')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByRole('img', { name: 'Decorative banner' }))
    expect(screen.getByRole('link', { name: 'Load More' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
