import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { GALLERY_COUNTRIES } from '../data'

describe('Gallery', () => {
  it('renders the title and the first country as the featured heading', () => {
    render(<Gallery />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Destination Gallery' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: GALLERY_COUNTRIES[0] }),
    ).toBeInTheDocument()
  })

  it('lists every country as a control button with the active one pressed', () => {
    render(<Gallery />)

    GALLERY_COUNTRIES.forEach((country) => {
      expect(screen.getByRole('button', { name: country })).toBeInTheDocument()
    })
    expect(screen.getByRole('button', { name: GALLERY_COUNTRIES[0] })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('changes the featured country when a control is clicked', () => {
    render(<Gallery />)

    fireEvent.click(screen.getByRole('button', { name: 'Japan' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Japan' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Japan' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: GALLERY_COUNTRIES[0] })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })

  it('wraps around when navigating with the arrows', () => {
    render(<Gallery />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous country' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: GALLERY_COUNTRIES[GALLERY_COUNTRIES.length - 1],
      }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next country' }))
    expect(
      screen.getByRole('heading', { level: 1, name: GALLERY_COUNTRIES[0] }),
    ).toBeInTheDocument()
  })
})
