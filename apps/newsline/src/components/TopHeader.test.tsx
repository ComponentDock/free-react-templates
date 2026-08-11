import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TopHeader } from './TopHeader'
import {
  breakingNews,
  breakingNewsLabel,
  loginLabel,
  socialLinks,
  topSearchLabel,
  topSocialLabel,
} from '../data'

describe('TopHeader', () => {
  it('shows the breaking-news label and every headline in the ticker', () => {
    render(<TopHeader />)
    expect(screen.getByText(breakingNewsLabel)).toBeInTheDocument()
    const ticker = screen.getByRole('region', { name: breakingNewsLabel })
    for (const headline of breakingNews) {
      expect(within(ticker).getAllByText(headline).length).toBeGreaterThan(0)
    }
  })

  it('renders social links, the search button and the Login link', () => {
    render(<TopHeader />)
    const social = screen.getByRole('list', { name: topSocialLabel })
    for (const link of socialLinks) {
      expect(within(social).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: topSearchLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: loginLabel })).toBeInTheDocument()
  })

  it('uses the dark night background with a line border', () => {
    const { container } = render(<TopHeader />)
    expect(container.firstElementChild).toHaveClass('bg-night')
    expect(container.firstElementChild).toHaveClass('border-line')
  })
})
