import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NewsletterBand } from './NewsletterBand'

describe('NewsletterBand', () => {
  it('renders the band copy, illustration and berry email input with the overlapping gradient button', () => {
    const { container } = render(<NewsletterBand />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Subscribe for our Newsletter' }),
    ).toBeInTheDocument()

    const input = screen.getByPlaceholderText('Enter Email Address')
    expect(input).toHaveClass('bg-berry', 'h-[60px]')

    const submit = screen.getByRole('button', { name: 'subscribe' })
    expect(submit).toHaveClass('brand-gradient', 'sm:-ml-[45px]')

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/outpost-newsletter/560/420',
    )
    expect(container.querySelectorAll('.brand-gradient')).toHaveLength(2)
  })

  it('blocks submission on an invalid address and confirms a valid one', () => {
    render(<NewsletterBand />)

    fireEvent.change(screen.getByPlaceholderText('Enter Email Address'), {
      target: { value: 'nope' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByPlaceholderText('Enter Email Address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks! You are on the list')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
