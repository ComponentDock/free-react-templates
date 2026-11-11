import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ANNOUNCE, HEADLINE, SUB, TITLE_ID } from '../data/site'
import { HeroCopy } from './HeroCopy'

describe('HeroCopy', () => {
  it('opens with the announcement pill: tag, sentence and chevron', () => {
    render(<HeroCopy />)

    const pill = screen.getByRole('link', { name: new RegExp(ANNOUNCE.text) })
    expect(pill).toHaveAttribute('href', ANNOUNCE.href)
    expect(pill).toHaveTextContent(ANNOUNCE.tag)
    expect(pill.querySelector('.vg-announce-tag')).toHaveTextContent(ANNOUNCE.tag)
    expect(pill.querySelectorAll('svg')).toHaveLength(1)
    expect(pill.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders one headline whose second line is a block span inside it', () => {
    const { container } = render(<HeroCopy />)

    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(1)

    const title = headings[0]!
    expect(title.tagName).toBe('H1')
    expect(title).toHaveAttribute('id', TITLE_ID)
    expect(title).toHaveTextContent(`${HEADLINE.lead} ${HEADLINE.tail}`)

    const tail = title.querySelector('span')
    expect(tail).toHaveClass('vg-title-tail')
    expect(tail).toHaveTextContent(HEADLINE.tail)
    expect(container.querySelectorAll('h1 span')).toHaveLength(1)
    expect(title.querySelectorAll('br')).toHaveLength(0)
  })

  it('closes with the capped sub-paragraph as the third block', () => {
    const { container } = render(<HeroCopy />)

    const sub = container.querySelector('.vg-sub')
    expect(sub).toHaveTextContent(SUB)
    expect(sub?.tagName).toBe('P')

    const order = Array.from(container.children).map((node) => node.className)
    expect(order).toEqual(['vg-announce', 'vg-title', 'vg-sub'])
  })
})
