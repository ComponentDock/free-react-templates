import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the single h1 over the photograph and its gradient wash', () => {
    const { container } = render(<Hero />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]?.textContent).toBe(hero.title)
    expect(headings[0]).toHaveClass('text-white', 'uppercase', 'sm:text-[40px]')

    const section = container.querySelector('#home') as HTMLElement
    expect(section).toHaveClass('min-h-[600px]')
    expect(container.querySelector('img')).toHaveAttribute('src', hero.image)
    expect(container.querySelector('[aria-hidden="true"].opacity-15')?.className).toContain('opacity-15')
  })

  it('carries the tracking input and the blue submit', () => {
    render(<Hero />)

    const input = screen.getByLabelText('Tracking number')
    expect(input).toHaveAttribute('placeholder', hero.placeholder)
    expect(input).toHaveClass('h-[55px]', 'rounded-[4px]', 'sm:w-[400px]')

    const submit = screen.getByRole('button', { name: hero.cta })
    expect(submit).toHaveAttribute('type', 'submit')
    expect(submit).toHaveClass('bg-brand', 'h-[55px]', 'sm:w-[130px]')
  })

  it('reports a validation message for an empty submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: hero.cta }))

    expect(screen.getByText('Enter a tracking number to continue.')).toBeInTheDocument()
    expect(screen.getByLabelText('Tracking number')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByRole('status')).toHaveTextContent('')
  })

  it('answers a real tracking number with a "no shipment found" result', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.type(screen.getByLabelText('Tracking number'), '  DKY-4417 ')
    await user.click(screen.getByRole('button', { name: hero.cta }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'No shipment found for “DKY-4417”. Check the number and try again.',
    )
    expect(screen.queryByText('Enter a tracking number to continue.')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Tracking number')).not.toHaveAttribute('aria-invalid')
  })

  it('clears a stale result when the next submission is empty', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByLabelText('Tracking number')

    await user.type(input, 'DKY-1')
    await user.click(screen.getByRole('button', { name: hero.cta }))
    expect(screen.getByRole('status')).not.toHaveTextContent('')

    await user.clear(input)
    await user.click(screen.getByRole('button', { name: hero.cta }))

    expect(screen.getByRole('status')).toHaveTextContent('')
    expect(screen.getByText('Enter a tracking number to continue.')).toBeInTheDocument()
  })
})
