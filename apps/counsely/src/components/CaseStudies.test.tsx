import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CaseStudies } from './CaseStudies'
import { cases } from '../data'

describe('CaseStudies', () => {
  it('renders the centered heading and the first case card', () => {
    render(<CaseStudies />)
    expect(screen.getByText(cases.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: cases.headline })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: cases.cards[0].title }),
    ).toBeInTheDocument()
  })

  it('advances and steps back through the carousel with the controls', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)

    const next = screen.getByRole('button', { name: 'Next case' })
    const prev = screen.getByRole('button', { name: 'Previous case' })

    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 3, name: cases.cards[1].title }),
    ).toBeInTheDocument()

    await user.click(prev)
    expect(
      screen.getByRole('heading', { level: 3, name: cases.cards[0].title }),
    ).toBeInTheDocument()

    await user.click(prev)
    expect(
      screen.getByRole('heading', { level: 3, name: cases.cards[3].title }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)

    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots.length).toBe(4)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    await user.click(dots[2]!)
    expect(
      screen.getByRole('heading', { level: 3, name: cases.cards[2].title }),
    ).toBeInTheDocument()
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]).not.toHaveAttribute('aria-current')
  })

  it('renders the gold hover overlay and the See All CTA', () => {
    const { container } = render(<CaseStudies />)
    const overlay = container.querySelector('.bg-brand')
    expect(overlay).not.toBeNull()
    expect(overlay!.className).toContain('opacity-0')

    const cta = screen.getByRole('link', { name: cases.cta.label })
    expect(cta).toHaveAttribute('href', '#cases')
  })
})
