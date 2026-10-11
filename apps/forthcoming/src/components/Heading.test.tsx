import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('renders one uppercase 48px bold white line with 22px below it', () => {
    render(<Heading />)

    const heading = screen.getByRole('heading', { level: 3 })

    expect(heading).toHaveClass(
      'pb-[22px]',
      'text-center',
      'text-[48px]',
      'leading-[1.2]',
      'font-bold',
      'text-white',
      'uppercase',
    )
    expect(heading).toHaveTextContent("We're almost there")
  })

  it('accepts a className override', () => {
    render(<Heading className="pb-0" />)

    expect(screen.getByRole('heading', { level: 3 })).toHaveClass('pb-0')
  })
})
