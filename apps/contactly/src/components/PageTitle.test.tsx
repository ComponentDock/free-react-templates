import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageTitle } from './PageTitle'

describe('PageTitle', () => {
  it('renders the page title heading', () => {
    render(<PageTitle />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Contact Form #02')
  })
})
