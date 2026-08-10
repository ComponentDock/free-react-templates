import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Navigational column with seven links', () => {
    render(<Footer />)
    const column = screen.getByRole('heading', { name: 'Navigational' }).closest('div')!
    const links = within(column).getAllByRole('link')
    expect(links).toHaveLength(7)
    for (const label of ['Home', 'About Me', 'Blog', 'Travel', 'Lifestyle', 'Fashion', 'Health']) {
      expect(within(column).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Recent Post column with four dated entries', () => {
    render(<Footer />)
    const column = screen.getByRole('heading', { name: 'Recent Post' }).closest('div')!
    expect(within(column).getAllByRole('link')).toHaveLength(4)
    expect(within(column).getByText('22 Jan, 2017')).toBeInTheDocument()
    expect(
      within(column).getByRole('link', { name: 'The Most Popular Leg Workout for Women' }),
    ).toBeInTheDocument()
  })

  it('renders the Tags column with nineteen tags', () => {
    render(<Footer />)
    const column = screen.getByRole('heading', { name: 'Tags' }).closest('div')!
    expect(within(column).getAllByRole('link')).toHaveLength(19)
  })

  it('renders a paraphrased copyright bar without ColorLib attribution', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()} All rights reserved`)),
    ).toBeInTheDocument()
    expect(screen.queryByText(/colorlib/i)).not.toBeInTheDocument()
  })
})
