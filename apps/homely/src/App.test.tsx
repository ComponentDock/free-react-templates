import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TESTIMONIALS } from './data'
import { App } from './App'

describe('App', () => {
  it('composes every section in the source order', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/The simple online home loan\./)

    const sectionHeadings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    const expected = [
      'How much you want?',
      'Solutions for every business need.',
      'We guide projects and organizations in making the right decisions.',
      'Why choose us?',
      'Get loan in 3 easy steps',
      'Latest News',
    ]
    let lastIndex = -1
    for (const name of expected) {
      const index = sectionHeadings.findIndex((text) => text === name)
      expect(index).toBeGreaterThan(lastIndex)
      lastIndex = index
    }
  })

  it('renders the testimonials carousel and the Component Dock footer credit', () => {
    render(<App />)

    const figure = screen.getByText(TESTIMONIALS[0].quote).closest('figure') as HTMLElement
    expect(figure.getAttribute('aria-hidden')).not.toBe('true')

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getAllByRole('link', { name: 'Apply For Loan' }).length).toBeGreaterThan(0)
  })
})
