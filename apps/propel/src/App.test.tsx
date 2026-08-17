import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections inside the landmarks', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /We are here to grow your business/,
    )
    expect(screen.getByRole('heading', { level: 2, name: /Startup/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Services/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Blog Posts/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Contact/ })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Start Your Business/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Grow Your Business/ }),
    ).toBeInTheDocument()
  })

  it('sets the document title', () => {
    document.title = 'Propel — Business & Startup Template'
    expect(document.title).toBe('Propel — Business & Startup Template')
  })
})
