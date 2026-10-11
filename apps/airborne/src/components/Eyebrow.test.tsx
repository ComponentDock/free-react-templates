import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Eyebrow } from './Eyebrow'

describe('Eyebrow', () => {
  it('sets the uppercase lead-in line in the design type', () => {
    render(<Eyebrow />)

    const line = screen.getByText('Our website is')

    expect(line).toHaveClass(
      'pb-[10px]',
      'font-sans',
      'text-[30px]',
      'leading-[1.2]',
      'text-white',
      'uppercase',
      'max-[1200px]:text-center',
    )
  })

  it('accepts a className override', () => {
    const { container } = render(<Eyebrow className="opacity-90" />)

    expect(container.firstElementChild).toHaveClass('opacity-90')
  })
})
