import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'
import { reasons, reasonsCaption } from '../data'

describe('WhyUs', () => {
  it('pairs four reasons as a definition list with a brand rule each', () => {
    const { container } = render(<WhyUs />)

    const terms = Array.from(container.querySelectorAll('dl dt'))
    const descriptions = Array.from(container.querySelectorAll('dl dd'))

    expect(terms.map((term) => term.textContent)).toEqual(reasons.map((reason) => reason.title))
    expect(descriptions).toHaveLength(4)

    for (const row of Array.from(container.querySelectorAll('dl > div'))) {
      expect(row).toHaveClass('border-l-2', 'border-primary-600', 'pl-5')
    }
  })

  it('renders the figure with descriptive alternative text and a visible caption', () => {
    render(<WhyUs />)

    const image = screen.getByRole('img', {
      name: 'A certified tester with gauges beside an open valve pit',
    })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/flowcert-1/800/600')

    const caption = screen.getByText(reasonsCaption)
    expect(caption.tagName).toBe('FIGCAPTION')
  })

  it('renders the rationale band heading and lede', () => {
    render(<WhyUs />)

    expect(screen.getByText('Why anyone bothers')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Three reasons this exists, and one of them is real' }),
    ).toBeInTheDocument()
  })
})
