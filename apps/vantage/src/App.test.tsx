import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections in the original order inside the main landmark', () => {
    const { container } = render(<App />)

    const sections = Array.from(container.querySelectorAll('main > *')).map((element) =>
      element.getAttribute('id'),
    )
    expect(sections).toEqual(['home', 'services', 'features', 'portfolio', 'contact', 'blog'])

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Vantage — Business & Finance')
  })
})
