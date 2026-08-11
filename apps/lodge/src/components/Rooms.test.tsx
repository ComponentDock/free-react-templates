import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Rooms } from './Rooms'
import {
  checkButtonLabel,
  checkTitle,
  dateFromLabel,
  datePlaceholder,
  dateToLabel,
  quantityDecreaseLabel,
  quantityIncreaseLabel,
  quantityLabel,
  quantityNames,
  roomName,
  roomNextLabel,
  roomOptions,
  roomPrevLabel,
  roomPrice,
  roomPriceFrom,
  roomSelectLabel,
  roomsSectionLabel,
} from '../data'

describe('Rooms', () => {
  it('renders the room card with title, price, and feature icons', () => {
    const { container } = render(<Rooms />)
    expect(screen.getByRole('region', { name: roomsSectionLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: roomName })).toBeInTheDocument()

    // The price label lives in the room card; "From" also appears as a date
    // label in the booking form, so scope the query to the article.
    const article = container.querySelector('article')!
    expect(within(article).getByText(roomPriceFrom)).toBeInTheDocument()
    expect(screen.getByText(roomPrice)).toBeInTheDocument()

    for (const label of ['Smart TV', 'High Wi-fii', 'AC', 'Parking', 'Pool']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('cycles the room photo carousel forward and backward with wrapping', () => {
    render(<Rooms />)
    expect(screen.getByAltText(`${roomName} photo 1`)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: roomNextLabel }))
    expect(screen.getByAltText(`${roomName} photo 2`)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: roomNextLabel }))
    fireEvent.click(screen.getByRole('button', { name: roomNextLabel }))
    // Wraps forward from the last photo back to the first.
    expect(screen.getByAltText(`${roomName} photo 1`)).toBeInTheDocument()

    // Wraps backward from the first photo to the last.
    fireEvent.click(screen.getByRole('button', { name: roomPrevLabel }))
    expect(screen.getByAltText(`${roomName} photo 3`)).toBeInTheDocument()
  })

  it('renders the booking widget with date fields, steppers, select, and button', () => {
    render(<Rooms />)
    expect(screen.getByRole('heading', { name: checkTitle })).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: dateFromLabel })).toHaveValue(datePlaceholder)
    expect(screen.getByRole('textbox', { name: dateToLabel })).toHaveValue(datePlaceholder)

    for (const name of quantityNames) {
      expect(screen.getByRole('textbox', { name: quantityLabel(name) })).toHaveValue('0')
      expect(screen.getByRole('button', { name: quantityDecreaseLabel(name) })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: quantityIncreaseLabel(name) })).toBeInTheDocument()
    }

    const select = screen.getByRole('combobox', { name: roomSelectLabel })
    expect(select).toHaveValue(roomOptions[0])
    for (const option of roomOptions) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: checkButtonLabel })).toBeInTheDocument()
  })

  it('increments and decrements the quantity steppers, clamping at zero', () => {
    render(<Rooms />)

    fireEvent.click(screen.getByRole('button', { name: quantityIncreaseLabel('Adults') }))
    expect(screen.getByRole('textbox', { name: quantityLabel('Adults') })).toHaveValue('1')

    fireEvent.click(screen.getByRole('button', { name: quantityDecreaseLabel('Adults') }))
    expect(screen.getByRole('textbox', { name: quantityLabel('Adults') })).toHaveValue('0')

    // Clamp: decreasing below zero keeps the value at zero.
    fireEvent.click(screen.getByRole('button', { name: quantityDecreaseLabel('Adults') }))
    expect(screen.getByRole('textbox', { name: quantityLabel('Adults') })).toHaveValue('0')

    fireEvent.click(screen.getByRole('button', { name: quantityIncreaseLabel('Children') }))
    expect(screen.getByRole('textbox', { name: quantityLabel('Children') })).toHaveValue('1')

    fireEvent.click(screen.getByRole('button', { name: quantityIncreaseLabel('Rooms') }))
    expect(screen.getByRole('textbox', { name: quantityLabel('Rooms') })).toHaveValue('1')
  })

  it('intercepts form submission', () => {
    const { container } = render(<Rooms />)
    const form = container.querySelector('form')!
    fireEvent.submit(form)
    expect(screen.getByRole('heading', { name: checkTitle })).toBeInTheDocument()
  })
})
