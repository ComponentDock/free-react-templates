import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('WordpressApp — App Landing Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toBe(
      'Eye catching design & sleek aesthetics',
    )
    expect(within(main).getByRole('heading', { name: 'The Features' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Built for every device' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
