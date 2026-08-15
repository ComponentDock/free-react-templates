import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the label, heading and three service cards', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: 'Services' })
    expect(within(section).getByText('Services')).toBeInTheDocument()
    expect(
      within(section).getByRole('heading', {
        level: 2,
        name: /With more than 20 years of experience/,
      }),
    ).toBeInTheDocument()

    for (const title of ['Graphic design', 'Web design', 'Mobile app']) {
      const card = within(section).getByRole('heading', { level: 3, name: title })
      expect(card).toBeInTheDocument()
      expect(within(section).getAllByText(/Lorem ipsum dolor sit amet/)[0]).toBeInTheDocument()
    }

    expect(section.querySelectorAll('article')).toHaveLength(3)
    expect(section.querySelectorAll('svg')).toHaveLength(3)
  })
})
