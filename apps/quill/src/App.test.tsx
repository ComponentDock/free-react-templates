import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes every section in order', () => {
    render(<App />)
    expect(document.title).toBe('Quill — Blog Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /Latest News from all categories/i }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /Hot topics from Travel Section/i }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /Fashion News This Week/i }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /About Blogger Team/i })).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
