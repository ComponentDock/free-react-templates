import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('shows the heading, copy and four numbered feature rows', () => {
    const { container } = render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/)).toHaveLength(5)

    const circles = container.querySelectorAll('.feature-29012 > div:first-child')
    expect(circles).toHaveLength(4)
    expect(circles[0]!).toHaveTextContent('1')
    expect(circles[1]!).toHaveTextContent('2')
    expect(circles[2]!).toHaveTextContent('3')
    expect(circles[3]!).toHaveTextContent('4')

    expect(screen.getByText('Odit Reiciendis')).toBeInTheDocument()
    expect(screen.getByText('Nisi Sint Explicabo')).toBeInTheDocument()
    expect(screen.getByText('Accusamus Labore Necessitatibus')).toBeInTheDocument()
    expect(screen.getByText('Consectetur Dolor Elit')).toBeInTheDocument()
  })

  it('uses a fixed-attachment photo background with a dark overlay', () => {
    const { container } = render(<WhyChooseUs />)
    expect(container.querySelector('section')).toHaveStyle({
      backgroundImage: "url('https://picsum.photos/seed/benefact-why/1600/900')",
    })
    expect(container.querySelector('section > div')).toHaveClass('bg-black/60')
  })
})
