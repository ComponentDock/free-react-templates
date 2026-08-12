import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'
import {
  COMPONENT_DOCK_URL,
  FOOTER_ABOUT,
  FOOTER_FEATURES,
  FOOTER_PARAGRAPH,
  FOOTER_SOCIALS,
} from '../data'

describe('Footer', () => {
  it('renders the about, features, paragraph, and follow columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER_ABOUT)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Features' })).toBeInTheDocument()
    for (const item of FOOTER_FEATURES) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 2, name: 'Some Paragraph' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER_PARAGRAPH)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Follow Us' })).toBeInTheDocument()
    for (const social of FOOTER_SOCIALS) {
      expect(screen.getByRole('link', { name: `Benevol on ${social.label}` })).toBeInTheDocument()
    }
  })

  it('links Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(dockLink).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(dockLink).toHaveAttribute('target', '_blank')
    expect(new Date().getFullYear().toString()).not.toBe('')
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
  })

  it('shows a validation error and no success for an invalid email', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'nope' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success message and clears the input for a valid email', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'jane@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
    expect(screen.getByLabelText('Email address')).toHaveValue('')
  })
})
