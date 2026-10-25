import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSplit } from './AboutSplit'
import { aboutSplit } from '../data'

describe('AboutSplit', () => {
  it('flushes the photo left and insets the text column', () => {
    render(<AboutSplit />)

    expect(screen.getByRole('heading', { level: 2, name: aboutSplit.heading })).toHaveClass(
      'md:text-[48px]',
      'font-normal',
    )

    for (const paragraph of aboutSplit.paragraphs) {
      expect(screen.getByText(paragraph)).toHaveClass('mt-[25px]')
    }

    const photo = screen.getByAltText('Rack of finished garments in the Modeline studio')
    expect(photo).toHaveClass('relative', 'md:h-[522px]', 'object-cover')
    expect(photo.parentElement).toHaveClass('md:w-1/2')
  })

  it('hides the offset halftone panel on small screens', () => {
    const { container } = render(<AboutSplit />)

    const panel = container.querySelector('.halftone')
    expect(panel).toHaveClass('bottom-[-112px]', 'hidden', 'md:block')
    expect(panel).toHaveAttribute('aria-hidden', 'true')
  })
})
