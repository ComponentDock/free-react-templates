import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Horse Club — Equestrian Club Website Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(
      /Inter relation Between Horse & Rider/,
    )

    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(
      headings.some((heading) =>
        heading.textContent?.includes('Choose the best plan that suits you'),
      ),
    ).toBe(true)
    expect(
      headings.some((heading) => heading.textContent?.includes('Latest News from our Blog')),
    ).toBe(true)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
