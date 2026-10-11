import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Headline } from './Headline'

describe('Headline', () => {
  it('renders the heavy uppercase title with its phone size step', () => {
    render(<Headline />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toHaveTextContent('Coming Soon')
    expect(heading).toHaveClass(
      'pb-[45px]',
      'font-heading',
      'text-[70px]',
      'leading-[1.1]',
      'font-bold',
      'text-white',
      'uppercase',
      'max-[576px]:text-[50px]',
      'max-[1200px]:text-center',
    )
  })

  it('accepts a className override', () => {
    render(<Headline className="drop-shadow" />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveClass('drop-shadow')
  })
})
