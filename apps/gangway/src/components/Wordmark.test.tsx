import { render, screen } from '@testing-library/react'
import { SITE_NAME } from '../lib/site'
import { Wordmark } from './Wordmark'

describe('Wordmark — the bar’s left anchor', () => {
  it('draws the page’s own name in uppercase at 24px with a wide track', () => {
    render(<Wordmark />)

    const link = screen.getByRole('link', { name: SITE_NAME })

    expect(link).toHaveAttribute('href', '#top')
    expect(link.className).toContain('text-[1.5rem]')
    expect(link.className).toContain('uppercase')
    expect(link.className).toContain('tracking-[.2rem]')
    expect(link.className).toContain('leading-9')
    expect(link.className).toContain('font-normal')
    expect(link.className).toContain('text-white')
    expect(link).not.toHaveAccessibleName('Brand')
  })

  it('sits in a half-width column that leaves the flow from 768px up', () => {
    render(<Wordmark />)

    const column = screen.getByTestId('wordmark-column')

    expect(column.className).toContain('w-1/2')
    expect(column.className).toContain('max-w-[50%]')
    expect(column.className).toContain('px-[15px]')
    expect(column.className).toContain('md:absolute')
    expect(column.className).toContain('md:left-[5%]')
  })
})
