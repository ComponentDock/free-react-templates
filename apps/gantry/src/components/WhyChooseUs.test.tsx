import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('shows the photo, the heading and the three features', () => {
    render(<WhyChooseUs />)

    const section = screen.getByRole('region', { name: 'Why Choose Us' })
    expect(within(section).getByText('Why Choose Us')).toBeInTheDocument()
    expect(
      within(section).getByRole('heading', { name: 'More than 50 year experience in industry' }),
    ).toBeInTheDocument()
    expect(section.querySelector('img')).toBeInTheDocument()

    const featureHeadings = within(section).getAllByRole('heading', { level: 4 })
    expect(featureHeadings.map((h) => h.textContent)).toEqual([
      'Expert in Buildings',
      'Modern Design',
      'Leading In Floor Planning',
    ])
  })
})
