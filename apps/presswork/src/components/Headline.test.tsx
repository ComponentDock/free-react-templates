import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Headline } from './Headline'
import { HEADLINE, HEADLINE_ID } from '../data/site'

describe('Headline', () => {
  it('renders one h1 carrying the section id', () => {
    render(<Headline />)
    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toHaveAttribute('id', HEADLINE_ID)
    expect(heading).toHaveClass('pw-title')
  })

  it('renders three explicit block lines in order', () => {
    const { container } = render(<Headline />)
    const lines = Array.from(container.querySelectorAll('.pw-title > span'))

    expect(lines).toHaveLength(3)
    expect(lines.map((line) => line.tagName)).toEqual(['SPAN', 'SPAN', 'SPAN'])
    expect(lines.map((line) => line.textContent)).toEqual([
      'We shape brands',
      'that outlast the',
      'trend cycle.',
    ])
    expect(HEADLINE).toHaveLength(3)
  })

  it('indents only the middle line', () => {
    const { container } = render(<Headline />)
    const indented = container.querySelectorAll('.pw-line--indent')

    expect(indented).toHaveLength(1)
    expect(indented[0]).toHaveTextContent('that outlast the')
  })

  it('sets exactly one word in italic rust inside the middle line', () => {
    const { container } = render(<Headline />)
    const accent = container.querySelectorAll('em')

    expect(accent).toHaveLength(1)
    const word = accent[0] as HTMLElement
    expect(word).toHaveClass('pw-accent')
    expect(word.textContent).toBe('outlast')
    expect(word.textContent?.split(/\s+/)).toHaveLength(1)
    expect(word.closest('.pw-line--indent')).not.toBeNull()
  })

  it('contains no second heading level', () => {
    const { container } = render(<Headline />)

    expect(container.querySelectorAll('h2')).toHaveLength(0)
  })
})
