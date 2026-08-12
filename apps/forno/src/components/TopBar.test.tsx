import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows contact details and open hours on a black strip', () => {
    render(<TopBar />)

    expect(screen.getByRole('link', { name: '+ 1235 2355 98' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'youremail@email.com' })).toBeInTheDocument()
    expect(screen.getByText('Open hours: Monday - Sunday 8:00AM - 9:00PM')).toBeInTheDocument()
  })
})
