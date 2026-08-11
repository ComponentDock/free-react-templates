import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PORTFOLIO_ITEMS } from '../data'
import { PortfolioMosaic } from './PortfolioMosaic'

describe('PortfolioMosaic', () => {
  it('renders the mosaic section with six linked project images', () => {
    const { container } = render(<PortfolioMosaic />)
    expect(screen.getByRole('region', { name: 'Portfolio' })).toBeInTheDocument()
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(6)
    for (let index = 0; index < PORTFOLIO_ITEMS.length; index += 1) {
      expect(images[index]!).toHaveAttribute('src', PORTFOLIO_ITEMS[index]!.src)
      expect(images[index]!).toHaveAttribute('alt', PORTFOLIO_ITEMS[index]!.alt)
    }
    expect(screen.getAllByRole('link', { name: 'View project' })).toHaveLength(6)
  })

  it('lays the top row out as 3/6/3 columns and the bottom row as three equal cells', () => {
    const { container } = render(<PortfolioMosaic />)
    const grids = container.querySelectorAll('section > div > div')
    expect(grids).toHaveLength(2)
    const rowOneLinks = grids[0]?.querySelectorAll('a') ?? []
    const rowTwoLinks = grids[1]?.querySelectorAll('a') ?? []
    expect(rowOneLinks).toHaveLength(3)
    expect(rowTwoLinks).toHaveLength(3)
    expect(rowOneLinks[0]?.className).toContain('md:col-span-3')
    expect(rowOneLinks[1]?.className).toContain('md:col-span-6')
    expect(rowTwoLinks[0]?.className).toContain('md:col-span-4')
  })

  it('paints a black band behind the top of the section', () => {
    const { container } = render(<PortfolioMosaic />)
    const band = container.querySelector('div[aria-hidden="true"]')
    expect(band?.className).toContain('bg-ink')
    expect(band?.className).toContain('h-[70%]')
  })
})
