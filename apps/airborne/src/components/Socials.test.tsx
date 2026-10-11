import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Socials } from './Socials'

describe('Socials', () => {
  it('renders three square outlined buttons with labelled brand glyphs', () => {
    const { container } = render(<Socials />)

    expect(container.firstElementChild).toHaveClass('flex', 'flex-wrap', 'my-[10px]')

    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(3)
    expect(links.map((link) => link.getAttribute('aria-label'))).toEqual([
      'Facebook',
      'Twitter',
      'Youtube',
    ])

    for (const link of links) {
      expect(link).toHaveAttribute('href', '#')
      expect(link).toHaveClass(
        'mr-[6px]',
        'flex',
        'h-[36px]',
        'w-[36px]',
        'items-center',
        'justify-center',
        'rounded-social',
        'border-2',
        'border-white',
        'bg-transparent',
        'text-white',
        'transition-all',
        'duration-[400ms]',
        'hover:bg-brand',
      )
      expect(link.querySelector('svg')).toHaveClass('h-[22px]', 'w-[22px]')
    }
  })

  it('accepts a className override on the row', () => {
    const { container } = render(<Socials className="mt-[5px]" />)

    expect(container.firstElementChild).toHaveClass('mt-[5px]')
  })
})
