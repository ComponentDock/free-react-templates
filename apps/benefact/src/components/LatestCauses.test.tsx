import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestCauses } from './LatestCauses'

describe('LatestCauses', () => {
  it('shows the heading with a description paragraph beside it', () => {
    render(<LatestCauses />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Causes' })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders three cause cards with badges, progress, amounts and organizers', () => {
    const { container } = render(<LatestCauses />)
    const cards = container.querySelectorAll('article.cause')
    expect(cards).toHaveLength(3)

    const badges = container.querySelectorAll('article.cause > div > span')
    expect(badges[0]!).toHaveTextContent('School')
    expect(badges[1]!).toHaveTextContent('Health')
    expect(badges[2]!).toHaveTextContent('Livelihood')

    const fills = container.querySelectorAll('article.cause [style*="background-color"]')
    expect(fills).toHaveLength(3)
    expect(fills[0]!).toHaveStyle({ width: '80%', backgroundColor: 'rgb(220, 53, 69)' })
    expect(fills[1]!).toHaveStyle({ width: '80%', backgroundColor: 'rgb(0, 166, 81)' })
    expect(fills[2]!).toHaveStyle({ width: '80%', backgroundColor: 'rgb(255, 193, 7)' })

    expect(screen.getAllByText('80% complete')).toHaveLength(3)
    expect(screen.getAllByText('Donated')).toHaveLength(3)
    expect(screen.getAllByText('$32,919')).toHaveLength(3)
    expect(screen.getAllByText('James Smith')).toHaveLength(3)
  })
})
