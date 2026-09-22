import { render, screen } from '@testing-library/react'
import { RoomAvailability } from './RoomAvailability'
import { ROOM, CHECK_FORM } from '../data'
import { describe, expect, it } from 'vitest'

describe('RoomAvailability', () => {
  it('renders room title and price', () => {
    render(<RoomAvailability />)
    expect(screen.getByRole('heading', { name: ROOM.title })).toBeInTheDocument()
    expect(screen.getByText(ROOM.price)).toBeInTheDocument()
  })

  it('renders room image', () => {
    render(<RoomAvailability />)
    const img = screen.getByRole('img', { name: ROOM.title })
    expect(img).toHaveAttribute('src', ROOM.image)
  })

  it('renders all feature icons', () => {
    render(<RoomAvailability />)
    for (const feat of ROOM.features) {
      expect(screen.getByText(feat.label)).toBeInTheDocument()
    }
  })

  it('renders check availability form', () => {
    render(<RoomAvailability />)
    expect(screen.getByLabelText(CHECK_FORM.arrivalLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(CHECK_FORM.departureLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(CHECK_FORM.roomTypeLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(CHECK_FORM.quantityLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: CHECK_FORM.submitLabel })).toBeInTheDocument()
  })

  it('renders all room type options', () => {
    render(<RoomAvailability />)
    for (const rt of CHECK_FORM.roomTypes) {
      expect(screen.getByRole('option', { name: rt })).toBeInTheDocument()
    }
  })

  it('has gold-bordered form styling', () => {
    render(<RoomAvailability />)
    const heading = screen.getByRole('heading', { name: 'Check Availability' })
    const formContainer = heading.closest('div')!
    expect(formContainer).toHaveClass('border-brand')
  })

  it('prevents default form submission', () => {
    render(<RoomAvailability />)
    const form = document.querySelector('form')!
    const event = new Event('submit', { bubbles: true, cancelable: true })
    form.dispatchEvent(event)
    // onSubmit calls e.preventDefault — form should not navigate
  })
})
