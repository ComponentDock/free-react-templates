import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Lightwell')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Being unique is the preference/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Brief Information About Lightwell/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Send Us Message' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
