import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { BeforeAfter } from './BeforeAfter'

const rect = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  right: 800,
  bottom: 600,
  width: 800,
  height: 600,
  toJSON: () => ({}),
} as DOMRect

describe('BeforeAfter', () => {
  it('renders the before/after images, labels, and slider', () => {
    render(<BeforeAfter seed="shutter-retouch-1" caption="Portrait Retouching" />)
    expect(screen.getByRole('img', { name: 'Portrait Retouching — before' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Portrait Retouching — after' })).toBeInTheDocument()
    expect(screen.getByText('Before')).toBeInTheDocument()
    expect(screen.getByText('After')).toBeInTheDocument()
    const slider = screen.getByRole('slider', { name: 'Portrait Retouching comparison' })
    expect(slider).toHaveAttribute('aria-valuenow', '50')
  })

  it('moves the split with the pointer while dragging', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(rect)
    render(<BeforeAfter seed="shutter-retouch-1" caption="Portrait Retouching" />)
    const container = screen.getByTestId('before-after-container')
    const slider = screen.getByRole('slider', { name: 'Portrait Retouching comparison' })

    fireEvent.pointerDown(container)
    fireEvent.pointerMove(container, { clientX: 400 })
    expect(slider).toHaveAttribute('aria-valuenow', '50')

    fireEvent.pointerMove(container, { clientX: 1600 })
    expect(slider).toHaveAttribute('aria-valuenow', '100')

    fireEvent.pointerMove(container, { clientX: -400 })
    expect(slider).toHaveAttribute('aria-valuenow', '0')

    fireEvent.pointerUp(container)
    fireEvent.pointerMove(container, { clientX: 400 })
    expect(slider).toHaveAttribute('aria-valuenow', '0')
  })

  it('ignores pointer moves before dragging starts', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(rect)
    render(<BeforeAfter seed="shutter-retouch-1" caption="Portrait Retouching" />)
    const container = screen.getByTestId('before-after-container')
    const slider = screen.getByRole('slider', { name: 'Portrait Retouching comparison' })
    fireEvent.pointerMove(container, { clientX: 700 })
    expect(slider).toHaveAttribute('aria-valuenow', '50')
  })

  it('stops dragging when the pointer leaves the container', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(rect)
    render(<BeforeAfter seed="shutter-retouch-1" caption="Portrait Retouching" />)
    const container = screen.getByTestId('before-after-container')
    const slider = screen.getByRole('slider', { name: 'Portrait Retouching comparison' })
    fireEvent.pointerDown(container)
    fireEvent.pointerLeave(container)
    fireEvent.pointerMove(container, { clientX: 700 })
    expect(slider).toHaveAttribute('aria-valuenow', '50')
  })

  it('adjusts the split with the arrow keys', () => {
    render(<BeforeAfter seed="shutter-retouch-1" caption="Portrait Retouching" />)
    const slider = screen.getByRole('slider', { name: 'Portrait Retouching comparison' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    expect(slider).toHaveAttribute('aria-valuenow', '55')
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    expect(slider).toHaveAttribute('aria-valuenow', '50')
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    expect(slider).toHaveAttribute('aria-valuenow', '0')
    fireEvent.keyDown(slider, { key: 'ArrowLeft' })
    expect(slider).toHaveAttribute('aria-valuenow', '0')
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    expect(slider).toHaveAttribute('aria-valuenow', '100')
    fireEvent.keyDown(slider, { key: 'ArrowRight' })
    expect(slider).toHaveAttribute('aria-valuenow', '100')
    fireEvent.keyDown(slider, { key: 'Enter' })
    expect(slider).toHaveAttribute('aria-valuenow', '100')
  })
})
