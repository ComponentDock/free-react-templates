import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Headline } from './Headline'

describe('Headline', () => {
  it('renders the grey under-construction line with the reference typography', () => {
    render(<Headline />)

    const line = screen.getByText('Our website is under construction')
    expect(line).toHaveClass('font-heading', 'text-[25px]', 'text-muted', 'text-center')
    expect(line).toHaveClass('pt-[33px]', 'pb-[68px]')
  })

  it('accepts a className override', () => {
    const { container } = render(<Headline className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
