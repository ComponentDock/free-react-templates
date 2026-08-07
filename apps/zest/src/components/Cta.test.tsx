import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the CTA heading and Purchase Now button', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { name: 'CREATE YOUR OWN WEBSITE TODAY !' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Purchase Now' })).toHaveAttribute('href', '#home')
  })
})
