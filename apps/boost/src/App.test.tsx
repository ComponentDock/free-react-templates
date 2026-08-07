import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Boost — App Landing Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toBe(
      'Boost Productivity with Boost',
    )
    expect(within(main).getByRole('heading', { name: 'The Features' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'More Features' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What People Says' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Pricing for All' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'News & Updates' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
