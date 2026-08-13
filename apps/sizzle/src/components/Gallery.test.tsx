import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { galleryCategories, galleryImages } from '../data'

describe('Gallery', () => {
  it('renders the heading and all six filter pills', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Food and Customer Gallery')
    for (const category of galleryCategories) {
      expect(screen.getByRole('button', { name: category })).toBeInTheDocument()
    }
  })

  it('shows every photo by default', () => {
    render(<Gallery />)
    for (const image of galleryImages) {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument()
    }
  })

  it('filters photos when a pill is clicked', () => {
    render(<Gallery />)
    const breakfast = galleryImages.filter((image) => image.category === 'Breakfast')

    fireEvent.click(screen.getByRole('button', { name: 'Breakfast' }))
    for (const image of breakfast) {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument()
    }
    for (const image of galleryImages.filter((entry) => entry.category !== 'Breakfast')) {
      expect(screen.queryByAltText(image.alt)).not.toBeInTheDocument()
    }
  })

  it('restores all photos when All Menu is selected', () => {
    render(<Gallery />)
    fireEvent.click(screen.getByRole('button', { name: 'Dinner' }))
    fireEvent.click(screen.getByRole('button', { name: 'All Menu' }))
    for (const image of galleryImages) {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument()
    }
  })
})
