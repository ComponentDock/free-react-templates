import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections, and footer with the correct landmarks and document title', () => {
    render(<App />)

    expect(document.title).toBe('Bold — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Another cool free template by the fine folks at colorlib',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Achievements' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Leading brands trust Bold for good' }),
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', {
        level: 2,
        name: 'Far far away Behind the Word Mountains',
      }),
    ).toHaveLength(3)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Join over 1M+ people who enjoy using our app',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Fill out the form' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
