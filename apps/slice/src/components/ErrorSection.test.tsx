import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the Oops overline above the 404 display', () => {
    render(<ErrorSection />)

    const overline = screen.getByText(/oops! page not found/i)
    expect(overline.tagName).toBe('H3')
    expect(overline.className).toContain('uppercase')
    expect(overline.className).toContain('tracking-[3px]')
  })

  it('renders the 404 heading as three tightly-tracked digits with cut shadows', () => {
    render(<ErrorSection />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/404/)

    const digits = heading.querySelectorAll('span')
    expect(digits).toHaveLength(3)
    expect(digits[0]?.textContent).toBe('4')
    expect(digits[1]?.textContent).toBe('0')
    expect(digits[2]?.textContent).toBe('4')

    expect(heading.className).toContain('tracking-[-40px]')
    expect(heading.className).toContain('text-shadow')
  })

  it('renders the apologetic message as the level-2 heading', () => {
    render(<ErrorSection />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/we are sorry, but the page you requested was not found/i)
    expect(heading.className).toContain('uppercase')
  })
})
