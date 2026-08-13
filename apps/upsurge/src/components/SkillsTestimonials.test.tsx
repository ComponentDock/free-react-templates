import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SkillsTestimonials } from './SkillsTestimonials'

describe('SkillsTestimonials', () => {
  it('shows five labeled progress bars with their percentages', () => {
    render(<SkillsTestimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Skills' })).toBeInTheDocument()

    const expected: Array<[string, number]> = [
      ['Illustrator', 80],
      ['Photoshop', 90],
      ['SEO', 80],
      ['E-commerce', 60],
      ['HTML', 70],
    ]
    for (const [label, value] of expected) {
      const bar = screen.getByRole('progressbar', { name: label })
      expect(bar).toHaveAttribute('aria-valuenow', String(value))
      const card = bar.parentElement!.parentElement!
      expect(within(card).getByText(`${value}%`)).toBeInTheDocument()
    }
  })

  it('shows the first testimonial and cycles with the arrows', async () => {
    const user = userEvent.setup()
    render(<SkillsTestimonials />)

    expect(screen.getByText('Michael Smith')).toBeInTheDocument()
    expect(screen.getByText('Client')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Michael Smith')).toBeInTheDocument()
  })
})
