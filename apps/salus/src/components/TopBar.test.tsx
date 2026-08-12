import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { contact } from '../data'

describe('TopBar', () => {
  it('renders social icons and contact details', () => {
    render(<TopBar />)

    const socials = screen.getByLabelText('Social links')
    expect(socials).toBeInTheDocument()
    expect(screen.getByLabelText('facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('linkedin')).toBeInTheDocument()
    expect(screen.getByLabelText('x')).toBeInTheDocument()

    expect(screen.getByText(contact.email)).toBeInTheDocument()
    expect(screen.getByText(contact.phoneTop)).toBeInTheDocument()
  })
})
