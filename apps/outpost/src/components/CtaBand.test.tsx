import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the heading, copy, black button and the floating illustration', () => {
    const { container } = render(<CtaBand />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Get Ready for Real time Adventure' }),
    ).toBeInTheDocument()

    const book = screen.getByRole('link', { name: 'Book a Trip' })
    expect(book).toHaveAttribute('href', '#newsletter')
    expect(book).toHaveClass('bg-ink', 'leading-[48px]', 'tracking-[2px]')

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(1)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/outpost-cta/700/520')
    expect(images[0]).toHaveClass('object-cover')

    expect(container.querySelector('img[aria-hidden="true"]')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/outpost-cta-bg/1600/600',
    )
  })
})
