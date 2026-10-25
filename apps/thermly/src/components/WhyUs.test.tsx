import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'
import { reasons } from '../data'

describe('WhyUs', () => {
  it('renders the four reasons as a definition list', () => {
    render(<WhyUs />)

    expect(
      screen.getByRole('heading', { name: 'The appointment is the product' }),
    ).toBeInTheDocument()
    const terms = screen.getAllByRole('term')
    expect(terms.map((term) => term.textContent)).toEqual(reasons.map((reason) => reason.title))
    expect(screen.getAllByRole('definition')).toHaveLength(4)
  })

  it('renders the technician placeholder with descriptive alternative text and a caption', () => {
    render(<WhyUs />)

    expect(
      screen.getByRole('img', { name: 'A technician working on site in a hard hat and gloves' }),
    ).toHaveAttribute('src', 'https://picsum.photos/seed/thermly-1/800/600')
    expect(
      screen.getByText('A Thermly technician and van, photographed on a call in Cedar County.'),
    ).toBeInTheDocument()
  })
})
