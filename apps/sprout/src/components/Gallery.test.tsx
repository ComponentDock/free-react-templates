import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and image grid', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /our gallery/i })).toBeInTheDocument()
    const images = screen.getAllByRole('button', { name: /gallery image/i })
    expect(images).toHaveLength(6)
  })

  it('opens lightbox when an image is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const firstImage = screen.getAllByRole('button', { name: /gallery image/i })[0]!
    await user.click(firstImage)
    expect(screen.getByRole('dialog', { name: /image lightbox/i })).toBeInTheDocument()
  })

  it('closes lightbox when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getAllByRole('button', { name: /gallery image/i })[0]!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close lightbox/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('navigates to the next image in the lightbox', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getAllByRole('button', { name: /gallery image/i })[0]!)
    const dialog = screen.getByRole('dialog')
    expect(dialog.querySelector('img')).toHaveAttribute('alt', 'Gallery image 1')
    await user.click(screen.getByRole('button', { name: /next image/i }))
    expect(dialog.querySelector('img')).toHaveAttribute('alt', 'Gallery image 2')
  })

  it('navigates to the previous image in the lightbox', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getAllByRole('button', { name: /gallery image/i })[1]!)
    const dialog = screen.getByRole('dialog')
    expect(dialog.querySelector('img')).toHaveAttribute('alt', 'Gallery image 2')
    await user.click(screen.getByRole('button', { name: /previous image/i }))
    expect(dialog.querySelector('img')).toHaveAttribute('alt', 'Gallery image 1')
  })

  it('does not close lightbox when clicking the lightbox image', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getAllByRole('button', { name: /gallery image/i })[0]!)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    const lightboxImg = screen.getByRole('dialog').querySelector('img')!
    await user.click(lightboxImg)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes lightbox when clicking the backdrop', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getAllByRole('button', { name: /gallery image/i })[0]!)
    const dialog = screen.getByRole('dialog')
    // Use fireEvent to click the dialog backdrop directly
    fireEvent.click(dialog)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('wraps around when clicking previous on the first image', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getAllByRole('button', { name: /gallery image/i })[0]!)
    await user.click(screen.getByRole('button', { name: /previous image/i }))
    const dialog = screen.getByRole('dialog')
    expect(dialog.querySelector('img')).toHaveAttribute('alt', 'Gallery image 6')
  })
})
