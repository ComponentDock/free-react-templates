import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Jotter — Personal Blog Template')
  })

  it('composes the sidebar, hero, articles and footer in order', () => {
    render(<App />)

    const sidebar = screen.getByRole('complementary', { name: 'Sidebar' })
    expect(within(sidebar).getByText(/jotter/)).toBeInTheDocument()
    expect(within(sidebar).getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    const main = screen.getByRole('main')
    const h1 = within(main).getByRole('heading', { level: 1 })
    expect(h1.textContent).toMatch(/Jude Marlowe/)
    expect(within(main).getByRole('heading', { level: 2, name: 'Articles' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(
      within(contentinfo).getByRole('heading', { name: 'Have a Questions?' }),
    ).toBeInTheDocument()
    expect(within(contentinfo).getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
