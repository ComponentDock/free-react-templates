import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GiftBand } from './GiftBand'
import { GIFT_CTA, GIFT_TITLE } from '../lib/site'

describe('GiftBand', () => {
  it('sets the heading, the subtitle and the white pill on the scarlet band', () => {
    const { container } = render(<GiftBand />)

    const band = container.querySelector('section') as HTMLElement

    expect(band).toHaveClass('damask-red')
    expect(band).toHaveClass('xl:pt-[120px]', 'xl:pb-[130px]', 'text-center')

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toHaveTextContent(GIFT_TITLE)
    expect(heading).toHaveClass('text-[40px]', 'text-white', 'xl:text-[70px]')
    expect(screen.getByText(/only present we are asking for/)).toHaveClass('text-white')
  })

  it('carries a white pill that opens the reply card', () => {
    render(<GiftBand />)

    const cta = screen.getByRole('link', { name: GIFT_CTA })

    expect(cta).toHaveAttribute('href', '#rsvp')
    expect(cta).toHaveClass('bg-white', 'rounded-[30px]', 'text-gift-ink', 'h-[60px]')
    expect(cta).not.toHaveClass('rounded-lg')
  })
})
