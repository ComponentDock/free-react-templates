import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MiniPostRow } from './MiniPostRow'

describe('MiniPostRow', () => {
  it('renders the thumbnail, headline and byline/date line', () => {
    render(
      <MiniPostRow
        post={{
          seed: 'bullion-mini-1',
          headline: 'Regulators Publish Draft Framework for Stablecoins',
          author: 'Danile Palmer',
          date: 'Jan 25, 2018',
        }}
      />,
    )

    const headline = screen.getByRole('heading', {
      name: 'Regulators Publish Draft Framework for Stablecoins',
    })
    expect(headline).toBeInTheDocument()
    expect(screen.getByText('by Danile Palmer, Jan 25, 2018')).toBeInTheDocument()

    const image = screen.getByRole('img', {
      name: 'Regulators Publish Draft Framework for Stablecoins',
    })
    expect(image).toHaveAttribute('src', expect.stringContaining('bullion-mini-1'))
    expect(image).toHaveAttribute('src', expect.stringContaining('/100/100'))
    expect(image).toHaveClass('h-[100px]', 'w-[100px]')
  })
})
