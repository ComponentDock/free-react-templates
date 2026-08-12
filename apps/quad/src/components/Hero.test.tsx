import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the uppercase sub-headline and headline', () => {
    render(<Hero />)

    expect(screen.getByText(/Best online education service In the world/)).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/One Step Ahead This Season/)
    expect(heading).toHaveClass('text-primary')
  })

  it('renders the navy learn more and gold see course buttons side by side', () => {
    render(<Hero />)

    const learnMore = screen.getByRole('link', { name: /learn more/ })
    expect(learnMore).toHaveAttribute('href', '#features')
    expect(learnMore.className).toMatch(/bg-primary/)
    expect(learnMore.className).toMatch(/rounded-\[5px\]/)
    expect(learnMore.className).toMatch(/text-accent/)

    const seeCourse = screen.getByRole('link', { name: /see course/ })
    expect(seeCourse).toHaveAttribute('href', '#courses')
    expect(seeCourse.className).toMatch(/bg-accent/)
    expect(seeCourse.className).toMatch(/rounded-\[5px\]/)
    expect(seeCourse.className).toMatch(/text-primary/)
  })

  it('uses a full-height photo cover background', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section#home')
    expect(section?.className).toMatch(/min-h-\[900px\]/)
    expect(section?.getAttribute('style')).toMatch(/picsum\.photos/)
  })
})
