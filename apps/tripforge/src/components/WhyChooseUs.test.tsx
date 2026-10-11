import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TESTIMONIALS, WHY } from '../data/content'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the copy column with its outline action', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Best Directory Website')).toBeInTheDocument()
    expect(screen.getByText('Why', { selector: 'strong' })).toBeInTheDocument()
    for (const paragraph of WHY.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    const action = screen.getByText('Read more')
    expect(action).toHaveAttribute('href', '#why')
    expect(action).toHaveClass('btn-pill-outline')
  })

  it('renders the first testimonial with its round photo and quote badge', () => {
    const { container } = render(<WhyChooseUs />)
    const region = screen.getByRole('region', { name: 'Guest testimonials' })
    expect(region).toHaveAttribute('data-index', '0')
    expect(screen.getByText('Testimony')).toBeInTheDocument()
    expect(screen.getByText('Our', { selector: 'strong' })).toBeInTheDocument()
    expect(screen.getByText('Guests Says')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: TESTIMONIALS[0]!.name })).toHaveAttribute(
      'src',
      TESTIMONIALS[0]!.photo,
    )
    expect(screen.getByText('Guest from italy')).toBeInTheDocument()
    expect(container.querySelectorAll('.quote-badge')).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeDisabled()
  })

  it('steps through the testimonials and clamps at the ends', () => {
    render(<WhyChooseUs />)
    const region = screen.getByRole('region', { name: 'Guest testimonials' })
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const previous = screen.getByRole('button', { name: 'Previous testimonial' })

    fireEvent.click(next)
    expect(region).toHaveAttribute('data-index', '1')
    expect(screen.getByText('Guest from London')).toBeInTheDocument()

    fireEvent.click(next)
    expect(region).toHaveAttribute('data-index', String(TESTIMONIALS.length - 1))
    expect(screen.getByText('Guest from Philippines')).toBeInTheDocument()
    expect(next).toBeDisabled()
    fireEvent.click(next)
    expect(region).toHaveAttribute('data-index', String(TESTIMONIALS.length - 1))

    fireEvent.click(previous)
    expect(region).toHaveAttribute('data-index', '1')
    fireEvent.click(previous)
    expect(region).toHaveAttribute('data-index', '0')
    expect(previous).toBeDisabled()
  })
})
