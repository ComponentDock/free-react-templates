import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and document title', () => {
    render(<App />)

    expect(document.title).toBe('BulkApp — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'The Best App in the Universe',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Unique Features' })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', {
        level: 2,
        name: 'We Believe that Interior beautifies the Total Architecture',
      }),
    ).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Table' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Unique Screenshots' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Download This App Today!' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
