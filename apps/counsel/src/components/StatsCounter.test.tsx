import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  it('renders the heading and four stat boxes', () => {
    render(<StatsCounter />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Counsel Law Firm Established Since 1990/ }),
    ).toBeInTheDocument()

    expect(screen.getByText('500')).toBeInTheDocument()
    expect(screen.getByText('Qualified Lawyers')).toBeInTheDocument()
    expect(screen.getByText('2000')).toBeInTheDocument()
    expect(screen.getByText('Trusted Clients')).toBeInTheDocument()
    expect(screen.getByText('1500')).toBeInTheDocument()
    expect(screen.getByText('Successful Cases')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Honors & Awards')).toBeInTheDocument()
  })

  it('shows a video play placeholder', () => {
    render(<StatsCounter />)

    const image = screen.getByRole('img', { name: /law firm video/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
