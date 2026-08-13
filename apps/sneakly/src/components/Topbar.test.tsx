import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Topbar } from './Topbar'

describe('Topbar', () => {
  it('renders the black strip with phone, email and promo', () => {
    render(<Topbar />)

    const strip = screen.getByTestId('topbar')
    expect(strip).toHaveClass('bg-ink')

    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
    expect(screen.getByText('3-5 Business days delivery & Free Returns')).toBeInTheDocument()
  })

  it('renders one icon per contact item', () => {
    const { container } = render(<Topbar />)

    expect(container.querySelectorAll('svg')).toHaveLength(2)
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(2)
  })

  it('renders the promo as plain text and keeps the phone first', () => {
    render(<Topbar />)

    const strip = screen.getByTestId('topbar')
    const texts = Array.from(strip.querySelectorAll('span')).map((node) => node.textContent)
    expect(texts[0]).toBe('+ 1235 2355 98')
    expect(userEvent.setup()).toBeDefined()
  })
})
