import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Socials } from './Socials'

describe('Socials', () => {
  it('renders three round white discs with grey glyphs', () => {
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
        'mr-[5px]',
        'my-[3px]',
        'h-[36px]',
        'w-[36px]',
        'items-center',
        'justify-center',
        'rounded-full',
        'bg-white',
        'text-social',
        'transition-all',
        'duration-[400ms]',
        'hover:bg-brand',
        'hover:text-white',
      )
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })

  it('accepts a className override', () => {
    const { container } = render(<Socials className="justify-end" />)

    expect(container.firstElementChild).toHaveClass('justify-end')
  })
})
