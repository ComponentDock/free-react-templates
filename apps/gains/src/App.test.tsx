import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gains — Fitness Template')
  })

  it('composes all sections in the expected order', () => {
    const { container } = render(<App />)

    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Join now', // hero: "Join" + <span>now</span>
      'Why you Join with us', // about
      'Make yourself stronger than your excuses', // extends
      'Why you Join with us', // offer
      'happy customer says', // testimonials
      'Calculate your bmi', // calculate
      'Meet with trainers', // team
      'Start 15 days free trial', // subscribe
    ])

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(container.querySelector('img')).not.toBeNull()
  })
})
