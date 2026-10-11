import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Headline } from './Headline'

describe('Headline', () => {
  it('renders the uppercase title and the light under-construction line', () => {
    render(<Headline />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Coming Soon')
    expect(heading).toHaveClass(
      'text-[50px]',
      'leading-[1.2]',
      'font-black',
      'text-white',
      'uppercase',
      'pb-[10px]',
    )

    const subtitle = screen.getByText('Our website is under construction')
    expect(subtitle).toHaveClass('text-[30px]', 'font-light', 'text-white', 'pb-[60px]')
  })

  it('accepts a className override on the title', () => {
    render(<Headline className="tracking-tight" />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveClass('tracking-tight')
  })
})
