import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the stay window as the page h1 and a guest/cost sub-line', () => {
    render(<Header />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('3 stays for 12 \u2013 17 Oct')
    expect(screen.getByText('2 guests \u00b7 prices include taxes and cleaning fees')).toBeVisible()
  })

  it('uses an en dash in the title and a middle dot in the sub, never hyphens', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('\u2013')
    expect(screen.getByRole('heading', { level: 1 }).textContent).not.toContain('-')
    expect(screen.getByText(/prices include taxes/).textContent).toContain('\u00b7')
  })

  it('keeps the head to one title line and one sub-line with no control', () => {
    const { container } = render(<Header />)

    const header = container.querySelector('header')!
    expect(header.querySelectorAll('h1')).toHaveLength(1)
    expect(header.querySelectorAll('p')).toHaveLength(1)
    expect(header.querySelectorAll('button, a, input, select')).toHaveLength(0)
  })
})
