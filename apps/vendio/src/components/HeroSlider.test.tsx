import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { heroCtaLabel, heroDotLabel, heroNextLabel, heroPrevLabel, heroSlides } from '../data'

describe('HeroSlider', () => {
  it('shows the first slide content, the Shop Now button and numbered dots', () => {
    render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroCtaLabel })).toBeInTheDocument()
    expect(screen.getByAltText('Featured product slide 1')).toBeInTheDocument()
    for (const [index] of heroSlides.entries()) {
      const dot = screen.getByRole('button', { name: heroDotLabel(index + 1) })
      expect(dot).toHaveTextContent(`0${index + 1}.`)
    }
    expect(screen.getByRole('button', { name: heroDotLabel(1) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('moves to the slide selected by a dot and marks it active', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: heroDotLabel(2) }))
    expect(screen.getByAltText('Featured product slide 2')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: heroDotLabel(2) })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: heroDotLabel(1) })).not.toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('cycles slides with the next and previous controls', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: heroNextLabel }))
    expect(screen.getByAltText('Featured product slide 2')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: heroNextLabel }))
    expect(screen.getByAltText('Featured product slide 3')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: heroNextLabel }))
    expect(screen.getByAltText('Featured product slide 1')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: heroPrevLabel }))
    expect(screen.getByAltText('Featured product slide 3')).toBeInTheDocument()
  })
})
