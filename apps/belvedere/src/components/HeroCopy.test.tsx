import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  ABOUT_ID,
  BIO,
  CV_CTA,
  EMAIL,
  HEADLINE,
  INTRO,
  PRIMARY_CTA,
  TITLE_ID,
} from '../data/site'
import { HeroCopy } from './HeroCopy'

describe('HeroCopy', () => {
  it('renders the intro, the one headline and the bio in order', () => {
    const { container } = render(<HeroCopy />)

    const copy = container.querySelector('.bv-copy')
    const intro = container.querySelector('.bv-hello')
    const title = screen.getByRole('heading', { level: 1 })
    const bio = container.querySelector('.bv-bio')

    expect(intro).toHaveTextContent(INTRO)
    expect(title).toHaveTextContent(headlineText())
    expect(title).toHaveAttribute('id', TITLE_ID)
    expect(bio).toHaveTextContent(BIO)
    expect(bio).toHaveAttribute('id', ABOUT_ID)

    // Order: intro → h1 → bio, with no divider between them.
    const order = [intro, title, bio].map((node) => Array.from(copy?.children ?? []).indexOf(node!))
    expect(order).toEqual([0, 1, 2])
  })

  it('marks one phrase of the headline with a real <mark>', () => {
    const { container } = render(<HeroCopy />)

    const mark = container.querySelector('h1 mark')
    expect(mark).toHaveTextContent(HEADLINE.highlight)
    expect(mark).toHaveClass('bv-mark')
    expect(container.querySelectorAll('mark')).toHaveLength(1)
  })

  it('pairs the filled mailto with the ghost CV request', () => {
    const { container } = render(<HeroCopy />)

    const primary = screen.getByRole('link', { name: PRIMARY_CTA.label })
    expect(primary).toHaveAttribute('href', `mailto:${EMAIL}`)
    expect(primary).toHaveClass('bv-primary')

    const secondary = screen.getByRole('link', { name: new RegExp(CV_CTA.label) })
    expect(secondary).toHaveAttribute('href', CV_CTA.href)
    expect(secondary).toHaveTextContent(`${CV_CTA.label} ${CV_CTA.meta}`)

    const actions = container.querySelector('.bv-actions')
    expect(actions?.children).toHaveLength(2)
  })
})

function headlineText() {
  return `${HEADLINE.before}${HEADLINE.highlight}${HEADLINE.after}`
}
