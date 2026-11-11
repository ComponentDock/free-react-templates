import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CTA, EYEBROW, HEADLINE, MENU_LINK, STANDFIRST, TITLE_ID } from '../data/site'
import { HeroCopy } from './HeroCopy'

describe('HeroCopy', () => {
  it('renders the eyebrow with its aria-hidden rule', () => {
    const { container } = render(<HeroCopy />)

    const eyebrow = container.querySelector('.tt-eyebrow')
    expect(eyebrow).toHaveTextContent(EYEBROW)
    expect(eyebrow?.querySelector('span')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders one sentence-case headline with one italic accent', () => {
    render(<HeroCopy />)

    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveAttribute('id', TITLE_ID)
    expect(title).toHaveTextContent(
      `${HEADLINE.before}${HEADLINE.accent}${HEADLINE.after}`.replace(/\s+/g, ' ').trim(),
    )

    const accent = title.querySelector('em')
    expect(accent).toHaveTextContent(HEADLINE.accent)
    expect(title.querySelectorAll('em')).toHaveLength(1)
  })

  it('renders the standfirst as one paragraph', () => {
    render(<HeroCopy />)

    expect(screen.getByText(STANDFIRST)).toBeInTheDocument()
  })

  it('renders the filled CTA beside the underlined text link, both wired', () => {
    render(<HeroCopy />)

    expect(screen.getByRole('link', { name: CTA.label })).toHaveAttribute('href', CTA.href)
    expect(screen.getByRole('link', { name: MENU_LINK.label })).toHaveAttribute(
      'href',
      MENU_LINK.href,
    )
  })

  it('draws the secondary link’s arrow as one svg', () => {
    const { container } = render(<HeroCopy />)

    expect(container.querySelectorAll('svg')).toHaveLength(1)
  })
})
