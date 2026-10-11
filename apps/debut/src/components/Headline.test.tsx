import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Headline } from './Headline'

describe('Headline', () => {
  it('announces the launch with a bold accent', () => {
    const { container } = render(<Headline />)

    expect(screen.getByText(/follow us for update now!/)).toBeInTheDocument()
    const accent = container.querySelector('span')
    expect(accent).toHaveTextContent('Coming Soon')
    expect(accent).toHaveClass('font-bold')
  })

  it('merges a className override', () => {
    const { container } = render(<Headline className="pb-0" />)
    expect(container.firstElementChild).toHaveClass('pb-0')
  })
})
