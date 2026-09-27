import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes navbar, registration form, and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Regcraft — Registration Form Template')

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Registration Info')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
