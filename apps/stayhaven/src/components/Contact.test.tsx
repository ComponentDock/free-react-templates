import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'
import { CONTACT_INFO } from '../data'

describe('Contact', () => {
  it('renders the heading and address, phone and email blocks', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()

    for (const info of CONTACT_INFO) {
      expect(screen.getByRole('heading', { level: 3, name: info.label })).toBeInTheDocument()
      expect(screen.getByText(info.value)).toBeInTheDocument()
    }
  })
})
