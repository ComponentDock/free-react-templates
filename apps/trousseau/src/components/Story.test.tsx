import { render, screen } from '@testing-library/react'
import { STORY_CTA, STORY_DATE, STORY_HEADING, STORY_NAMES, STORY_VENUE } from '../lib/site'
import { Story } from './Story'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the invitation band', () => {
  it('frames the invitation with two ornate photographs', () => {
    const { container } = render(<Story />)

    const sources = Array.from(container.querySelectorAll('img')).map((image) => image.src)

    expect(sources).toEqual([
      expect.stringContaining('seed/trousseau-2/700/900'),
      expect.stringContaining('seed/trousseau-3/700/900'),
    ])
    expect(container.querySelectorAll('[data-ornament]')).toHaveLength(2)
  })

  it('prints the heading, the date, the names and the venue', () => {
    render(<Story />)

    expect(screen.getByRole('heading', { name: STORY_HEADING })).toBeInTheDocument()
    expect(screen.getByText(STORY_DATE)).toBeInTheDocument()
    expect(screen.getByText(STORY_NAMES)).toBeInTheDocument()
    expect(screen.getByText(STORY_VENUE)).toBeInTheDocument()
    expect(tokens(screen.getByText(STORY_DATE))).toContain('block')
  })

  it('sends the visitor on with the square pink button', () => {
    render(<Story />)

    const cta = screen.getByRole('link', { name: STORY_CTA })

    expect(cta).toHaveAttribute('href', '#journey')
    expect(tokens(cta)).toContain('rounded-none')
    expect(tokens(cta)).toContain('bg-primary-600')
    expect(tokens(cta)).not.toContain('rounded-lg')
  })
})
