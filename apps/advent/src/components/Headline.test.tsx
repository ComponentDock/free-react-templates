import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Headline } from './Headline'

describe('Headline', () => {
  it('renders the uppercase title and its lighter under-construction line', () => {
    render(<Headline />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toHaveTextContent("We're Launching Soon")
    expect(heading).toHaveClass(
      'pb-[10px]',
      'text-center',
      'font-heading',
      'text-[60px]',
      'leading-[1.2]',
      'font-bold',
      'text-white',
      'uppercase',
    )

    const sub = screen.getByText(/under construction/i)

    expect(sub).toHaveClass(
      'max-w-[526px]',
      'pb-[43px]',
      'text-center',
      'text-[24px]',
      'leading-[1.5]',
      'text-white',
    )
  })

  it('accepts a className override', () => {
    const { container } = render(<Headline className="gap-2" />)

    expect(container.firstElementChild).toHaveClass('gap-2')
  })
})
