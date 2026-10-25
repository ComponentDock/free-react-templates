import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutStatement } from './AboutStatement'
import { aboutStatement } from '../data'

describe('AboutStatement', () => {
  it('sets the heading, the paragraph and the signature in a 7-of-12 column', () => {
    const { container } = render(<AboutStatement />)

    expect(screen.getByRole('heading', { level: 2, name: aboutStatement.heading })).toHaveClass(
      'md:text-[48px]',
      'font-normal',
      'text-ink',
    )
    for (const paragraph of aboutStatement.paragraphs) {
      expect(screen.getByText(paragraph)).toHaveClass('mt-[30px]', 'max-w-[560px]')
    }
    expect(screen.getByText(aboutStatement.signature)).toHaveClass('w-[233px]', 'border-b-2')
    expect(container.querySelector('.md\\:w-7\\/12')).toBeInTheDocument()
  })

  it('crops the portrait past the right edge without widening the page', () => {
    render(<AboutStatement />)

    const portrait = screen.getByAltText('Studio portrait of the Modeline team')
    expect(portrait).toHaveClass('right-[-63px]', 'absolute', 'hidden', 'lg:block')
    expect(screen.getByLabelText('About the brand')).toHaveClass('overflow-hidden')
  })
})
