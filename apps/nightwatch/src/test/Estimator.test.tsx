import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Estimator } from '../components/Estimator'
import { ESTIMATOR } from '../content'

function estimate() {
  return screen.getByTestId('estimate').textContent
}

describe('Estimator', () => {
  it('opens on the design default range: office, 12,000 sq ft, five nights', () => {
    render(<Estimator />)

    expect(estimate()).toBe('$2,050 to $2,750')
    expect(screen.getByLabelText('Type of building')).toHaveValue('Office')
    expect(screen.getByLabelText('Cleanable square footage')).toHaveValue(12000)
    expect(screen.getByRole('radio', { name: 'Five nights' })).toBeChecked()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(ESTIMATOR.title)
  })

  it('recomputes on the select, the numeric field and the extras pills', () => {
    render(<Estimator />)

    fireEvent.change(screen.getByLabelText('Type of building'), {
      target: { value: 'Medical or dental' },
    })
    fireEvent.change(screen.getByLabelText('Cleanable square footage'), {
      target: { value: '20000' },
    })
    expect(estimate()).toBe('$5,800 to $7,800')

    const floorCare = screen.getByRole('checkbox', { name: 'Monthly floor care' })
    fireEvent.click(floorCare)
    expect(floorCare).toBeChecked()
    expect(estimate()).toBe('$6,050 to $8,200')

    fireEvent.click(floorCare)
    expect(floorCare).not.toBeChecked()
    expect(estimate()).toBe('$5,800 to $7,800')
  })

  it('drops to an em dash when the square footage is empty and restores on input', () => {
    render(<Estimator />)
    const size = screen.getByLabelText('Cleanable square footage')

    fireEvent.change(size, { target: { value: '' } })
    expect(estimate()).toBe('—')

    fireEvent.change(size, { target: { value: '8000' } })
    expect(estimate()).toBe('$1,350 to $1,850')
  })

  it('moves the frequency factor with the radio pills', () => {
    render(<Estimator />)

    fireEvent.click(screen.getByRole('radio', { name: 'Once a week' }))
    expect(screen.getByRole('radio', { name: 'Once a week' })).toBeChecked()
    expect(estimate()).toBe('$650 to $900')

    fireEvent.click(screen.getByRole('radio', { name: 'Three nights' }))
    expect(estimate()).toBe('$1,450 to $1,950')
  })

  it('confirms in place without navigating', () => {
    const { container } = render(<Estimator />)
    const form = container.querySelector('form') as HTMLFormElement

    expect(form).not.toHaveAttribute('action')
    expect(screen.queryByRole('status')).toBeNull()

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Ada Byron' } })
    fireEvent.change(screen.getByLabelText('Work email'), { target: { value: 'ada@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: ESTIMATOR.submit }))

    expect(screen.getByRole('status')).toHaveTextContent(ESTIMATOR.confirmation)
  })

  it('keeps the inputs visually hidden but focusable for the pills', () => {
    render(<Estimator />)

    expect(screen.getByRole('radio', { name: 'Twice a week' })).toHaveClass('sr-only', 'peer')
    expect(screen.getByRole('checkbox', { name: 'Day porter, 4 hours' })).toHaveClass(
      'sr-only',
      'peer',
    )
    expect(screen.getByLabelText('Cleanable square footage')).toHaveClass('font-mono')
  })
})
