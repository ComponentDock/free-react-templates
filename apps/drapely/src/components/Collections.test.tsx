import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Collections } from './Collections'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the stacked rule-marked title', () => {
    render(<SectionTitle>Popular Products</SectionTitle>)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Popular Products')
  })

  it('supports a centered variant', () => {
    const { container } = render(<SectionTitle centered>Most Rated</SectionTitle>)

    expect(container.firstElementChild).toHaveClass('text-center')
  })
})

describe('Collections', () => {
  it('renders the Discover / The Collections title', () => {
    render(<Collections />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Discover')
    expect(heading).toHaveTextContent('The Collections')
  })

  it('renders the large Women tile and the stacked Men and Shoes tiles', () => {
    render(<Collections />)

    const women = screen.getByRole('link', { name: /Women 25 items/ })
    expect(women).toHaveAttribute('href', '#popular')
    expect(within(women).getByRole('img', { name: 'Women collection photo' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/drapely-collections-women/800/900',
    )

    expect(screen.getByRole('link', { name: /Men 25 items/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Shoes 25 items/ })).toBeInTheDocument()
  })
})
