import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const headings = within(main)
      .getAllByRole('heading')
      .map((heading) => heading.textContent)

    expect(headings[0]).toMatch(/fieldrun baseball club/i)
    expect(headings).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/latest game result/i),
        expect.stringMatching(/game schedule/i),
        expect.stringMatching(/about the phoenix/i),
        expect.stringMatching(/next match/i),
        expect.stringMatching(/our team squad/i),
        expect.stringMatching(/happy viewers/i),
        expect.stringMatching(/recent news/i),
        expect.stringMatching(/subcribe to our upcoming match/i),
      ]),
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
