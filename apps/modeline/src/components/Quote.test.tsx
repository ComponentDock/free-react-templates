import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Quote } from './Quote'
import { quote } from '../data'

describe('Quote', () => {
  it('centres the pull-quote over its attribution', () => {
    const { container } = render(<Quote />)

    expect(screen.getByText(quote.text)).toHaveClass('text-ink', 'italic', 'md:text-[36px]')
    expect(screen.getByRole('heading', { level: 2, name: quote.attribution })).toHaveClass(
      'font-bold',
    )
    expect(container.querySelector('section')).toHaveClass('py-[125px]', 'bg-white')
  })
})
