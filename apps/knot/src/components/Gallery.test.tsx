import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import {
  galleryCloseLabel,
  galleryDialogLabel,
  galleryOpenLabel,
  galleryPhotos,
  galleryTitle,
} from '../data'

describe('Gallery', () => {
  it('renders the title and nine photo cells', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2, name: galleryTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: new RegExp(galleryOpenLabel) })).toHaveLength(
      galleryPhotos.length,
    )
  })

  it('stays open when a non-Escape key is pressed', () => {
    render(<Gallery />)
    fireEvent.click(screen.getAllByRole('button', { name: /Open photo/ })[0]!)
    fireEvent.keyDown(screen.getByRole('dialog', { name: galleryDialogLabel }), {
      key: 'ArrowRight',
    })
    expect(screen.getByRole('dialog', { name: galleryDialogLabel })).toBeInTheDocument()
  })

  it('opens the lightbox, dismisses it with Escape, the close button and the backdrop', () => {
    render(<Gallery />)
    fireEvent.click(screen.getAllByRole('button', { name: /Open photo/ })[0]!)
    const dialog = screen.getByRole('dialog', { name: galleryDialogLabel })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog.querySelector('img')).toHaveAttribute('src', galleryPhotos[0]!.src)

    fireEvent.keyDown(dialog, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: galleryDialogLabel })).not.toBeInTheDocument()

    fireEvent.click(screen.getAllByRole('button', { name: /Open photo/ })[1]!)
    fireEvent.click(screen.getByRole('button', { name: galleryCloseLabel }))
    expect(screen.queryByRole('dialog', { name: galleryDialogLabel })).not.toBeInTheDocument()

    fireEvent.click(screen.getAllByRole('button', { name: /Open photo/ })[2]!)
    fireEvent.click(screen.getByRole('dialog', { name: galleryDialogLabel }))
    expect(screen.queryByRole('dialog', { name: galleryDialogLabel })).not.toBeInTheDocument()
  })
})
