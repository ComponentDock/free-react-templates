import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComingSoon } from './ComingSoon'

describe('ComingSoon', () => {
  it('renders the split page: subscription panel beside the countdown panel', () => {
    const { container } = render(<ComingSoon />)

    // panel one: wordmark, headline, form, spam note
    expect(screen.getByText(/^debut$/)).toBeInTheDocument()
    expect(screen.getByText(/follow us for update now!/)).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByText(/hate spam too/)).toBeInTheDocument()

    // panel two: the seeded cover plus the four countdown circles
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/debut-cover/1600/1200',
    )
    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('closes with the socials row and the Component Dock attribution', () => {
    render(<ComingSoon />)

    expect(screen.getAllByRole('link')).toHaveLength(4)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('keeps every external link on Component Dock', () => {
    render(<ComingSoon />)

    const external = screen
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))
      .filter((href) => href?.startsWith('http'))

    expect(external).toEqual(['https://www.componentdock.com/'])
  })

  it('merges a className override', () => {
    const { container } = render(<ComingSoon className="antialiased" />)
    expect(container.firstElementChild).toHaveClass('antialiased')
  })
})
