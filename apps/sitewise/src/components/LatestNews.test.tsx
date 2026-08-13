import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the heading and three blog cards with date, category, title, blurb', () => {
    const { container } = render(<LatestNews />)

    expect(screen.getByRole('heading', { level: 2, name: /Latest News/ })).toBeInTheDocument()

    expect(screen.getByText(/12 Jun, 2019/)).toBeInTheDocument()
    expect(screen.getAllByText('in Hosting tips')).toHaveLength(3)
    expect(
      screen.getByRole('heading', { name: 'Commitment to dedicated Support' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/round-the-clock human support still matters/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Five Signs You Need More Bandwidth' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Choosing the Right Hosting Plan' }),
    ).toBeInTheDocument()

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/sitewise-news-1/640/400')
  })
})
