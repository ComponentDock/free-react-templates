import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, error section, and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Azure — Error Page Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(
      /we are sorry, page not found/i,
    )
    expect(within(main).getByText(/might have been removed/i)).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'Back To Homepage' })).toHaveAttribute(
      'href',
      '/',
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
