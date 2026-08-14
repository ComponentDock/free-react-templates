import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the photo slides with caption boxes', () => {
    render(<HeroSlider />)

    expect(screen.getAllByRole('img')).toHaveLength(3)
    expect(screen.getAllByRole('img', { name: /Ice Cold Love — Nature Photography/ })).toHaveLength(
      2,
    )
    expect(
      screen.getByRole('img', { name: /Bold Architecture — Cityscape Photography/ }),
    ).toBeInTheDocument()

    const captions = screen.getAllByRole('heading', { level: 5 })
    expect(captions.map((h) => h.textContent)).toEqual([
      'Ice Cold Love',
      'Bold Architecture',
      'Ice Cold Love',
    ])
    expect(screen.getAllByText('Nature Photography')).toHaveLength(2)
    expect(screen.getByText('Cityscape Photography')).toBeInTheDocument()
  })

  it('marks the first slide as current', () => {
    render(<HeroSlider />)

    const slides = screen.getAllByRole('img')
    expect(slides[0]!.closest('article')).toHaveAttribute('aria-current', 'true')
    expect(slides[1]!.closest('article')).not.toHaveAttribute('aria-current')
  })

  it('advances to the following slide on next and scrolls it into view', () => {
    const scrollSpy = vi.spyOn(Element.prototype, 'scrollIntoView').mockImplementation(() => {})
    render(<HeroSlider />)

    // Mobile-only control (md:hidden → display:none in jsdom): fireEvent is
    // visibility-agnostic, unlike user-event.
    fireEvent.click(screen.getByRole('button', { name: 'Next slide', hidden: true }))

    const slides = screen.getAllByRole('img')
    expect(slides[0]!.closest('article')).not.toHaveAttribute('aria-current')
    expect(slides[1]!.closest('article')).toHaveAttribute('aria-current', 'true')
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', inline: 'start' })

    scrollSpy.mockRestore()
  })

  it('wraps backwards from the first slide to the last', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide', hidden: true }))

    const slides = screen.getAllByRole('img')
    expect(slides[2]!.closest('article')).toHaveAttribute('aria-current', 'true')
  })
})
