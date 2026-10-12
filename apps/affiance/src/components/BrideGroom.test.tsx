import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrideGroom } from './BrideGroom'
import { PORTRAITS } from '../lib/site'

describe('BrideGroom', () => {
  it('opens with the design eyebrow and the script band title', () => {
    render(<BrideGroom />)

    expect(screen.getByText('About Bride & Groom')).toHaveClass('border-dashed')
    expect(screen.getByRole('heading', { level: 2, name: 'Bride & Groom' })).toHaveClass('font-script')
  })

  it('alternates the two framed portraits', () => {
    render(<BrideGroom />)

    expect(screen.getByTestId('portrait-groom')).toHaveClass('md:flex-row-reverse')
    expect(screen.getByTestId('portrait-bride')).not.toHaveClass('md:flex-row-reverse')

    const groomPhoto = screen.getByTestId('portrait-groom').querySelector('img') as HTMLElement

    expect(groomPhoto).toHaveClass('border-[15px]', 'border-tint', 'h-[400px]', 'w-[400px]')
    expect(groomPhoto.getAttribute('src')).toContain('picsum.photos/seed/affiance-30/800/800')
  })

  it('sets each name in the script face beside its own copy', () => {
    render(<BrideGroom />)

    expect(screen.getByRole('heading', { level: 2, name: PORTRAITS[0]!.name })).toHaveClass(
      'font-script',
      'text-brand',
    )
    expect(screen.getByText(PORTRAITS[1]!.blurb)).toBeInTheDocument()
  })

  it('pins the two-doves watermark to the block that owns it', () => {
    const { container } = render(<BrideGroom />)

    const marks = Array.from(container.querySelectorAll('svg[aria-hidden="true"]'))

    expect(marks).toHaveLength(2)
    expect(marks[0] as unknown as HTMLElement).toHaveClass('right-0', 'h-[100px]')
    expect(marks[1] as unknown as HTMLElement).toHaveClass('left-0', 'h-[100px]')
  })

  it('aligns each text column towards its own photograph', () => {
    render(<BrideGroom />)

    const groomText = screen.getByRole('heading', { level: 2, name: PORTRAITS[0]!.name })
      .parentElement as HTMLElement

    expect(groomText).toHaveClass('md:text-right', 'md:pr-[30px]')
    expect(screen.getByRole('heading', { level: 2, name: PORTRAITS[1]!.name }).parentElement).toHaveClass(
      'md:pl-[30px]',
    )
  })
})
