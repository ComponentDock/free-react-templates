import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutBands } from './AboutBands'

describe('AboutBands', () => {
  it('renders the two light split bands with their headings', () => {
    render(<AboutBands />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Global server location',
      'Dedicated support',
    ])
  })

  it('lists the image first in the standard band and the copy first in the reversed band', () => {
    const { container } = render(<AboutBands />)
    const bands = container.querySelectorAll('section')
    expect(bands).toHaveLength(2)
    expect(bands[0]!.firstElementChild?.firstElementChild?.tagName).toBe('IMG')
    expect(bands[1]!.firstElementChild?.firstElementChild?.tagName).toBe('DIV')
  })

  it('renders the bullet points of both bands and the support phone link', () => {
    render(<AboutBands />)
    expect(
      screen.getByText('WordPress hosting with detailed website analytics'),
    ).toBeInTheDocument()
    expect(screen.getByText('Experts on hand for migrations and tuning')).toBeInTheDocument()
    expect(screen.getByText('Detailed website analytics included')).toBeInTheDocument()
    expect(screen.getByText('Talk to a specialist any day of the week')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 (555) 010-0142' })).toHaveAttribute(
      'href',
      'tel:+1555010142',
    )
  })
})
