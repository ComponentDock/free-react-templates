import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import {
  NEXT_ARROW_LABEL,
  PREVIOUS_ARROW_LABEL,
  TESTIMONIALS,
  TESTIMONIALS_TITLE,
} from '../lib/site'

const first = TESTIMONIALS[0] as (typeof TESTIMONIALS)[number]
const last = TESTIMONIALS[TESTIMONIALS.length - 1] as (typeof TESTIMONIALS)[number]

function next() {
  fireEvent.click(screen.getByRole('button', { name: NEXT_ARROW_LABEL }))
}

function previous() {
  fireEvent.click(screen.getByRole('button', { name: PREVIOUS_ARROW_LABEL }))
}

describe('Testimonials', () => {
  it('opens on the first quote with the speaker portrait, name and role', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: TESTIMONIALS_TITLE })).toBeInTheDocument()
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    expect(screen.getByText(first.name)).toBeInTheDocument()
    expect(screen.getByText(first.role)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: first.name })).toHaveAttribute('src', first.image)
  })

  it('steps forward and wraps back to the first quote', () => {
    render(<Testimonials />)

    next()
    expect(screen.getByText(last.quote)).toBeInTheDocument()

    next()
    expect(screen.getByText(first.quote)).toBeInTheDocument()
  })

  it('wraps backwards to the last quote', () => {
    render(<Testimonials />)

    previous()

    expect(screen.getByText(last.quote)).toBeInTheDocument()
    expect(screen.getByText(last.name)).toBeInTheDocument()
  })

  it('keeps a single quote card mounted', () => {
    render(<Testimonials />)

    expect(screen.getAllByTestId('quote-card')).toHaveLength(1)
  })
})
