import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { heroSlides } from '../data'

describe('Hero', () => {
  it('renders the headline, subtext, CTA, and slide counter for the first slide', () => {
    const { container } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Best IT Solution')
    expect(heading).toHaveTextContent('in your city')
    expect(
      screen.getByText(
        'Prevent data loss with encrypted storage and virtualized recovery, then enjoy increased productivity.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Find Out More' })).toHaveAttribute('href', '#about')
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(heroSlides.length)
  })

  it('advances, wraps forward, and wraps backward through the slides', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Secure. Scalable. Supported.',
    )
    expect(screen.getByText('2 / 2')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('2 / 2')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
  })

  it('marks inactive slides aria-hidden and keeps the active one visible', () => {
    const { container } = render(<Hero />)
    const slideLayers = container.querySelectorAll<HTMLElement>(
      'div.absolute.inset-0.transition-opacity',
    )
    expect(slideLayers).toHaveLength(heroSlides.length)
    const hidden = [...slideLayers].filter((el) => el.getAttribute('aria-hidden') === 'true')
    expect(hidden).toHaveLength(heroSlides.length - 1)
    const active = [...slideLayers].find((el) => !el.hasAttribute('aria-hidden'))
    expect(active).toBeDefined()
    const overlay = container.querySelector<HTMLElement>('.w-\\[74\\%\\]')
    expect(overlay).not.toBeNull()
  })
})
