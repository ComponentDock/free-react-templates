import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections in order with a main landmark and document title', () => {
    render(<App />)
    expect(document.title).toBe('Bolt — Fitness Template')

    const header = screen.getByRole('banner')
    expect(within(header).getByRole('link', { name: 'Bolt.' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    const headings = within(main)
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    // Section order matches the demo 1:1.
    expect(headings.join(' | ')).toContain('Physical activity')
    expect(headings.join(' | ')).toContain('The real workout starts when you want to stop.')
    expect(headings.join(' | ')).toContain('Pay now and get a 25% Discount')
    expect(headings.join(' | ')).toContain('1374')
    expect(headings.join(' | ')).toContain('Meet the Trainers')
    expect(headings.join(' | ')).toContain('Calculate your BMI')
    expect(headings.join(' | ')).toContain('Subscribe to newsletter')

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
