import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { faqs } from '../data'

describe('Faq', () => {
  it('renders eight complete questions in two columns', () => {
    const { container } = render(<Faq />)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(8)
    expect(container.querySelector('ul')).toHaveClass('md:grid-cols-2')

    for (const item of faqs) {
      const heading = screen.getByRole('heading', { level: 3, name: item.question })
      expect(heading).toHaveClass('text-[20px]', 'normal-case')
      expect(screen.getByText(item.answer)).toBeInTheDocument()
      expect(item.question.endsWith('?')).toBe(true)
    }
  })

  it('keeps every question a full sentence rather than a lorem fragment', () => {
    render(<Faq />)

    for (const item of faqs) {
      expect(item.question.split(' ').length).toBeGreaterThan(3)
    }
  })

  it('opens with the centred blue heading', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toHaveClass('text-brand', 'normal-case')
  })
})
