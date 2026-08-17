import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the headings and opens the first item by default', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()
    const first = screen.getByRole('button', { name: /Easily Find Logistics/ })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Delivering Results for Industry Leaders/ }),
    ).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: /Fast and Secure Transportation/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens a closed item and closes the previously open one', () => {
    render(<WhyChooseUs />)
    const second = screen.getByRole('button', { name: /Delivering Results for Industry Leaders/ })
    fireEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /Easily Find Logistics/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(1)
  })

  it('collapses the open item when it is clicked again', () => {
    render(<WhyChooseUs />)
    const first = screen.getByRole('button', { name: /Easily Find Logistics/ })
    fireEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Far far away, behind the word mountains/)).not.toBeInTheDocument()
  })

  it('swaps the plus and minus glyphs with the open state', () => {
    const { container } = render(<WhyChooseUs />)
    const openItem = screen.getByRole('button', { name: /Easily Find Logistics/ })
    expect(openItem.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /Delivering Results for Industry Leaders/ }))
    const svgs = () => [...container.querySelectorAll('svg[aria-hidden="true"]')]
    expect(svgs().length).toBe(3)
    expect(
      screen.getByRole('button', { name: /Easily Find Logistics/ }).querySelector('svg'),
    ).toBeInTheDocument()
  })
})
