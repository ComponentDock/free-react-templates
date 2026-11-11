import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  EDITION,
  FACES,
  FACTS,
  FACTS_ID,
  HEADLINE,
  SPEAKERS_ID,
  STANDFIRST,
  TITLE_ID,
  VENUE_ID,
  WHEN_ID,
} from '../data/site'
import { HeroCopy } from './HeroCopy'

describe('HeroCopy', () => {
  it('renders the edition pill, the headline and the standfirst', () => {
    const { container } = render(<HeroCopy />)

    expect(screen.getByText(EDITION)).toBeInTheDocument()

    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveAttribute('id', TITLE_ID)
    expect(title.textContent).toBe(`${HEADLINE.line1}${HEADLINE.line2} ${HEADLINE.year}`)

    expect(screen.getByText(STANDFIRST).tagName).toBe('P')
    expect(container.firstElementChild?.tagName).toBe('DIV')
  })

  it('draws the year as a stroked span, not an image', () => {
    render(<HeroCopy />)

    const year = screen.getByText(HEADLINE.year)
    expect(year.tagName).toBe('SPAN')
    expect(year).toHaveClass('sp-year')
    expect(year.closest('h1')).not.toBeNull()
  })

  it('renders three labelled facts with their own anchor targets', () => {
    const { container } = render(<HeroCopy />)

    expect(container.querySelector('dl')).toHaveAttribute('id', FACTS_ID)
    expect(screen.getByText('When').tagName).toBe('DT')
    expect(screen.getByText('Where').tagName).toBe('DT')
    expect(screen.getByText('Speakers').tagName).toBe('DT')

    expect(document.getElementById(WHEN_ID)).not.toBeNull()
    expect(document.getElementById(VENUE_ID)).toHaveTextContent('Manchester Central, UK')
    expect(document.getElementById(SPEAKERS_ID)).toHaveTextContent('24 talks')
    expect(FACTS).toHaveLength(3)
  })

  it('wraps the date range in two <time> elements', () => {
    const { container } = render(<HeroCopy />)

    const times = container.querySelectorAll('time')
    expect(times).toHaveLength(2)
    expect(times[0]).toHaveAttribute('datetime', '2027-03-18')
    expect(times[1]).toHaveAttribute('datetime', '2027-03-19')
    expect(container.querySelector('dd')).toHaveTextContent('18–19 March 2027')
  })

  it('draws the initials cluster as decoration beside the count', () => {
    const { container } = render(<HeroCopy />)

    const cluster = container.querySelector('.sp-faces')
    expect(cluster).toHaveAttribute('aria-hidden', 'true')
    expect(cluster?.children).toHaveLength(FACES.length)

    const first = cluster?.children[0]
    expect(first).toBeInstanceOf(HTMLElement)
    expect((first as HTMLElement).style.getPropertyValue('--c')).toBe(FACES[0]?.fill)
  })
})
