import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { heroHeadline, heroImage, heroImageAlt, heroSubline, searchPlaceholder } from '../data'

describe('Hero', () => {
  it('renders the photo hero with headline, subline and pill search form', () => {
    const { container } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(heroHeadline)
    expect(screen.getByText(heroSubline)).toBeInTheDocument()

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', heroImage)
    expect(img).toHaveAttribute('alt', heroImageAlt)

    const input = screen.getByRole('textbox', { name: searchPlaceholder })
    expect(input).toHaveAttribute('placeholder', searchPlaceholder)
    expect(input.className).toContain('h-[70px]')

    const submit = screen.getByRole('button', { name: 'Search' })
    expect(submit.className).toContain('rounded-[0_50%_50%_50%]')
    expect(submit.className).toContain('bg-brand')
  })

  it('submits the search form without navigating', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByRole('textbox', { name: searchPlaceholder })
    await user.type(input, 'Palo Alto')
    expect(input).toHaveValue('Palo Alto')
    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByRole('textbox', { name: searchPlaceholder })).toHaveValue('Palo Alto')
  })

  it('renders the pink scroll-down button and the two skewed white divider strips', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('link', { name: 'Scroll to services' })).toHaveAttribute(
      'href',
      '#services',
    )
    const strips = container.querySelectorAll('[class*="skewY(4deg)"], [class*="skewY(-4deg)"]')
    expect(strips.length).toBe(2)
  })
})
