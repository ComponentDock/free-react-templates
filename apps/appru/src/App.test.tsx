import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections, and footer with the correct landmarks and document title', () => {
    render(<App />)

    expect(document.title).toBe('Appru — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'App That Suits You Better' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Unique Features' })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', {
        level: 2,
        name: 'We Believe that Interior beautifies the Total Architecture',
      }),
    ).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 2, name: 'Featured Screens' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Suitable Pricing Plans' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
