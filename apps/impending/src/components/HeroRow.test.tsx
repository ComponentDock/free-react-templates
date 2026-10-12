import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroRow } from './HeroRow'

describe('HeroRow', () => {
  it('reverses the row so the clock lands right and the social rail left', () => {
    render(<HeroRow />)

    const row = screen.getByTestId('hero-row')

    expect(row).toHaveClass(
      'relative',
      'flex',
      'flex-row-reverse',
      'justify-between',
      'pr-[46px]',
      'pl-[58px]',
      'max-[992px]:flex-col',
      'max-[992px]:items-center',
      'max-[992px]:justify-start',
      'max-[992px]:px-[15px]',
    )
    expect(Array.from(row.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'hero-column',
      'countdown',
      'social-rail',
    ])
  })

  it('accepts layout overrides', () => {
    render(<HeroRow className="pt-[10px]" />)

    expect(screen.getByTestId('hero-row')).toHaveClass('pt-[10px]')
  })
})
