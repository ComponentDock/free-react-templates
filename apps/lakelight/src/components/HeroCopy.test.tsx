import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EYEBROW, HEADLINE, PROOF, SUB } from '../data/site'
import { HeroCopy } from './HeroCopy'

describe('HeroCopy', () => {
  it('orders the eyebrow, the headline, the paragraph and the proof row', () => {
    render(<HeroCopy />)

    const eyebrow = screen.getByText(EYEBROW)
    const title = screen.getByRole('heading', { level: 1 })
    const sub = screen.getByText(SUB)

    expect(eyebrow.compareDocumentPosition(title)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
    expect(title.compareDocumentPosition(sub)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })

  it('sets the accent phrase in an italic em and keeps one h1', () => {
    render(<HeroCopy />)

    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveTextContent(`${HEADLINE.roman} ${HEADLINE.accent}`)
    expect(title.querySelector('em')).toHaveTextContent(HEADLINE.accent)
    expect(screen.getAllByRole('heading')).toHaveLength(1)
  })

  it('lists three proof points as a figure and a phrase', () => {
    render(<HeroCopy />)

    const list = screen.getByRole('list')
    expect(list).toHaveAttribute('id', 'proof')
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(PROOF.length)
    expect(items.map((item) => item.textContent)).toEqual([
      '1,860 lakeside stays',
      '4.8 average guest rating',
      'Flexible cancellation on most stays',
    ])
    expect(items[0]?.querySelector('strong')).toHaveTextContent('1,860')
  })
})
