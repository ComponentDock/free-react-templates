import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from '../components/WhyUs'
import { COMMITMENTS, REGISTER_ROWS } from '../data'

describe('WhyUs', () => {
  it('renders the redrawn register panel with the sentence-long label', () => {
    render(<WhyUs />)

    const panel = screen.getByRole('img', { name: /The Plantroom asset register/ })
    expect(panel.tagName.toLowerCase()).toBe('svg')
    expect(screen.getByText('Asset register')).toBeInTheDocument()
    expect(screen.getByText('Exported on request, and on the day you leave.')).toBeInTheDocument()
  })

  it('renders every asset row with its age, refrigerant and verdict', () => {
    render(<WhyUs />)

    REGISTER_ROWS.forEach((row) => {
      expect(screen.getByText(row.asset)).toBeInTheDocument()
      expect(screen.getAllByText(row.gas).length).toBeGreaterThanOrEqual(1)
    })

    expect(screen.getAllByText('Good')).toHaveLength(3)
    expect(screen.getByText('Fair')).toBeInTheDocument()

    const replace = screen.getByText('Replace')
    expect(replace).toHaveAttribute('fill', '#f6bb63')
    expect(screen.getByText('Fair')).toHaveAttribute('fill', '#7bbcfb')
  })

  it('keeps the call-out about the condemned unit', () => {
    render(<WhyUs />)

    expect(
      screen.getByText('RTU-03: repair spend to date has passed half of replacement cost.'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('We will tell you. Most contractors will keep repairing it.'),
    ).toBeInTheDocument()
  })

  it('carries the figure caption and the four left-ruled definitions', () => {
    render(<WhyUs />)

    expect(
      screen.getByText('Replace with a photograph of your own engineers on a roof before launch.'),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Three things that are boring and decisive' }),
    ).toBeInTheDocument()

    COMMITMENTS.forEach((item) => {
      expect(screen.getByText(item.title).closest('div')).toHaveClass(
        'border-l-2',
        'border-primary-600',
        'pl-5',
      )
    })
    expect(screen.getAllByRole('definition')).toHaveLength(COMMITMENTS.length)
  })

  it('drops the figure below the text on a phone', () => {
    render(<WhyUs />)

    const figure = screen.getByText(/Replace with a photograph/).closest('figure')
    expect(figure?.parentElement).toHaveClass('order-last', 'lg:order-first')
  })
})
