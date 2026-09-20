import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section title', () => {
    render(<Gallery />)
    expect(screen.getByText(/gallery/i)).toBeInTheDocument()
  })

  it('shows first image by default', () => {
    render(<Gallery />)
    expect(screen.getByAltText(/gallery image 1/i)).toBeInTheDocument()
  })

  it('navigates to next image', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: /next image/i }))
    expect(screen.getByAltText(/gallery image 2/i)).toBeInTheDocument()
  })

  it('navigates to previous image from first', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: /previous image/i }))
    expect(screen.getByAltText(/gallery image 3/i)).toBeInTheDocument()
  })

  it('navigates to previous image from middle', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: /next image/i }))
    await user.click(screen.getByRole('button', { name: /previous image/i }))
    expect(screen.getByAltText(/gallery image 1/i)).toBeInTheDocument()
  })

  it('wraps next from last image', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: /next image/i }))
    await user.click(screen.getByRole('button', { name: /next image/i }))
    await user.click(screen.getByRole('button', { name: /next image/i }))
    expect(screen.getByAltText(/gallery image 1/i)).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: /go to image 3/i }))
    expect(screen.getByAltText(/gallery image 3/i)).toBeInTheDocument()
  })
})
