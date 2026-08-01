import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the main landmark and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Aurora — Personal Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(/Alex Morgan/)
    expect(within(main).getByRole('heading', { level: 2, name: /about/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { level: 2, name: /services/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { level: 2, name: /testimonials/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { level: 2, name: /contact/i })).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
