import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the header, sections and footer in landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Vesper — Church Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    for (const heading of [
      'Following Jesus wherever we are',
      'Welcome to Vesper Church',
      'Vesper Church Services',
      'Vesper Church Sermons',
      'Upcoming Events',
      'Causes Needs Our Help',
      'Read the Latest Blog',
      'Church Pastor',
      'Contact Me',
      'Vesper Church Photo Gallery',
      'Service Hours',
    ]) {
      expect(
        screen.getAllByRole('heading', { name: new RegExp(heading) }).length,
      ).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
