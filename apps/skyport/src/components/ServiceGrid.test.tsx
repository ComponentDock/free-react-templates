import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceGrid } from './ServiceGrid'

describe('ServiceGrid', () => {
  it('renders six feature cards under a centred title block', () => {
    render(<ServiceGrid />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'What Makes Skyport Different',
    )
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(6)
    expect(screen.getByText('Strong Support')).toBeInTheDocument()
    expect(screen.getByText('Positive Reviews')).toBeInTheDocument()
  })

  it('lays the cards out three-up on large screens and stacks below', () => {
    const { container } = render(<ServiceGrid />)

    expect(container.querySelector('.grid')).toHaveClass(
      'md:grid-cols-2',
      'lg:grid-cols-3',
      'gap-6',
    )
  })

  it('turns the surface brand blue with an offset shadow on hover and focus', () => {
    const { container } = render(<ServiceGrid />)

    const card = container.querySelector('.group')
    expect(card).toHaveClass(
      'bg-surface-soft',
      'px-[30px]',
      'hover:bg-brand',
      'hover:shadow-[-14.142px_14.142px_20px_0_rgba(157,157,157,0.5)]',
      'focus-within:bg-brand',
    )
  })

  it('keeps each icon decorative and whitens heading plus copy on hover', () => {
    const { container } = render(<ServiceGrid />)

    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(6)
    const heading = screen.getByRole('heading', { level: 4, name: 'Expert Engineers' })
    expect(heading).toHaveClass('group-hover:text-white', 'group-focus-within:text-white')
  })

  it('anchors the section for in-page navigation', () => {
    const { container } = render(<ServiceGrid />)

    expect(container.querySelector('section')).toHaveAttribute('id', 'service')
    expect(container.querySelector('section')).toHaveClass('scroll-mt-[108px]')
  })
})
