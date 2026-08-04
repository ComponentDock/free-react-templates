import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Thepetcare — Animal Care & Donation Website Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(/Saving Animals/)

    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(
      headings.some((heading) =>
        heading.textContent?.includes('The Kind of Care Your Pets Deserve'),
      ),
    ).toBe(true)
    expect(within(main).getByText('Play the video to see more')).toBeInTheDocument()
    expect(
      headings.some((heading) => heading.textContent?.includes('We looking for helping hand')),
    ).toBe(true)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
