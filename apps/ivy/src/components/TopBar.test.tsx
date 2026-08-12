import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { CONTACT_EMAIL, CONTACT_PHONE } from '../data'

describe('TopBar', () => {
  it('renders the wordmark, contact toppers and Apply now button', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /Ivy/ })).toHaveAttribute('href', '#home-section')
    expect(screen.getByText(CONTACT_EMAIL)).toBeInTheDocument()
    expect(screen.getByText(`Call Us: ${CONTACT_PHONE}`)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Apply now' })).toHaveAttribute(
      'href',
      '#admissions-section',
    )
  })
})
