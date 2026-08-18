import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { AGENTS, HERO, NEWSLETTER, PROPERTIES, TESTIMONIALS, WHY_CHOOSE } from './data'

describe('App', () => {
  it('composes every section in the template order', () => {
    render(<App />)

    // Header -> hero -> properties -> about -> why choose us -> testimonials
    // -> agents -> newsletter -> footer
    expect(screen.getByRole('banner')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading')
    const headingText = headings.map((heading) => heading.textContent ?? '')
    const firstH1 = headingText.findIndex((text) => text.includes(HERO.accent))
    expect(firstH1).toBeGreaterThan(-1)

    const findHeadingIndex = (needle: string) =>
      headingText.findIndex((text) => text.includes(needle))

    expect(findHeadingIndex(PROPERTIES.heading)).toBeGreaterThan(firstH1)
    const aboutIndex = findHeadingIndex('From more than 25 years')
    expect(aboutIndex).toBeGreaterThan(findHeadingIndex(PROPERTIES.heading))
    expect(findHeadingIndex(WHY_CHOOSE.heading)).toBeGreaterThan(aboutIndex)
    expect(findHeadingIndex(TESTIMONIALS.heading)).toBeGreaterThan(
      findHeadingIndex(WHY_CHOOSE.heading),
    )
    expect(findHeadingIndex(AGENTS.heading)).toBeGreaterThan(findHeadingIndex(TESTIMONIALS.heading))
    expect(findHeadingIndex(NEWSLETTER.heading)).toBeGreaterThan(findHeadingIndex(AGENTS.heading))

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders interactive sections: carousels, search and newsletter form', async () => {
    render(<App />)

    expect(screen.getByTestId('properties-track')).toBeInTheDocument()
    expect(screen.getByTestId('quotes-track')).toBeInTheDocument()
    expect(screen.getByTestId('agents-track')).toBeInTheDocument()

    // The hero nav search overlay opens within the composed page
    const user = (await import('@testing-library/user-event')).default
    await user.click(screen.getByRole('button', { name: 'Open search' }))
    expect(screen.getByRole('dialog', { name: 'Search' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close search' }))

    // Newsletter form accepts a valid email
    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'hello@domily.com')
    await user.click(screen.getByRole('button', { name: NEWSLETTER.button }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
  })
})
