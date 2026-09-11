import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MobileApp } from './MobileApp'

describe('MobileApp', () => {
  it('shows app download buttons and heading', () => {
    render(<MobileApp />)
    expect(screen.getByRole('heading', { name: 'Track from Anywhere' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Google Playstore/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Apple Appstore/ })).toBeInTheDocument()
  })
})
