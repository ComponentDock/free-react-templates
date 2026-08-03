import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, error section, and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Punch — Error Page Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toBe('Oops!')
    expect(within(main).getByRole('link', { name: 'Go to homepage' })).toHaveAttribute('href', '/')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
