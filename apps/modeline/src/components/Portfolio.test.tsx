import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Portfolio } from './Portfolio'
import { mosaic } from '../data'

describe('Portfolio', () => {
  it('lays the measured mosaic out on a five-column gap-free grid', () => {
    const { container } = render(<Portfolio />)

    expect(container.querySelector('section')).toHaveClass(
      'grid',
      'md:grid-cols-5',
      'grid-cols-1',
    )
    expect(screen.getAllByRole('link')).toHaveLength(mosaic.length - 1)
  })

  it('keeps the deliberate hole in the first row', () => {
    render(<Portfolio />)

    const gap = screen.getByTestId('mosaic-gap')
    expect(gap).toHaveClass('halftone', 'aspect-square', 'hidden', 'md:block')
    expect(gap).toBeEmptyDOMElement()
  })

  it('spans the 2x2 hero tile and plates the brand tile in navy', () => {
    const { container } = render(<Portfolio />)

    const wide = container.querySelector('a.sm\\:col-span-2')
    expect(wide).toHaveClass('md:row-span-2')
    expect(wide?.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('modeline-5'),
    )

    expect(screen.getByText('Modeline')).toBeInTheDocument()
    expect(screen.getByAltText('Backstage, Milan')).toHaveAttribute(
      'src',
      expect.stringContaining('?grayscale'),
    )
    expect(screen.getByAltText('Golden hour')).toHaveAttribute(
      'src',
      expect.not.stringContaining('?grayscale'),
    )
  })

  it('reveals a white label over the popup navy on hover and focus', () => {
    const { container } = render(<Portfolio />)

    const overlay = container.querySelector('a > span:last-child')
    expect(overlay).toHaveClass(
      'top-[10%]',
      'h-[80%]',
      'bg-popup/95',
      'group-hover:h-full',
      'group-focus-visible:opacity-100',
    )
    expect(overlay).toHaveTextContent('Backstage, Milan')
  })
})
