import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HEADLINE, SUB, TITLE_ID } from '../data/site'
import { HeroCopy } from './HeroCopy'

describe('HeroCopy', () => {
  it('renders the kicker, one headline and the paragraph in that order', () => {
    const { container } = render(<HeroCopy />)

    const blocks = Array.from(container.children).map((node) => node.tagName)
    expect(blocks).toEqual(['P', 'H1', 'P'])
  })

  it('names the brand and the film duration in the kicker', () => {
    render(<HeroCopy />)

    expect(screen.getByText('An Alpenglow film · 3 min 40 s')).toHaveClass('ap-kicker')
  })

  it('exposes the headline as the page title for the hero section', () => {
    render(<HeroCopy />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveAttribute('id', TITLE_ID)
    expect(heading).toHaveTextContent(HEADLINE)
  })

  it('renders the sub-paragraph verbatim', () => {
    render(<HeroCopy />)

    expect(screen.getByText(SUB)).toHaveClass('ap-sub')
  })
})
