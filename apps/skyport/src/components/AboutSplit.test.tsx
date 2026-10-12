import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSplit } from './AboutSplit'

describe('AboutSplit', () => {
  it('renders the caption beside a full-width own placeholder image', () => {
    render(<AboutSplit />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Built for teams who ship on Fridays',
    )
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/skyport-about/1000/700',
    )
  })

  it('offsets the copy column to the reference 20%/5% inset', () => {
    render(<AboutSplit />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.parentElement).toHaveClass('lg:pl-[20%]', 'lg:pr-[5%]')
  })

  it('offers an azure pill that inverts on hover', () => {
    render(<AboutSplit />)

    const cta = screen.getByRole('link', { name: 'See Details' })
    expect(cta).toHaveClass('bg-brand', 'rounded-[25px]', 'px-[50px]')
    expect(cta).toHaveClass('hover:bg-transparent', 'hover:text-brand', 'hover:border-brand')
  })

  it('exposes an accessible name for the split image', () => {
    render(<AboutSplit />)

    expect(screen.getByRole('img', { name: /cloud dashboard/ })).toBeInTheDocument()
  })
})
