import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_LEARN_MORE_LABEL } from '../data'

describe('Hero', () => {
  it('shows the first slide with the CTA and play button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Market leading')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Manufacturer')
    expect(
      screen.getByRole('link', { name: new RegExp(HERO_LEARN_MORE_LABEL, 'i') }),
    ).toHaveAttribute('href', '#about')
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('switches slides with arrows and dots', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Precision')

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Market leading')

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Precision')
  })

  it('opens and closes the video modal from the play button', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    expect(screen.getByRole('dialog', { name: 'Company video' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
