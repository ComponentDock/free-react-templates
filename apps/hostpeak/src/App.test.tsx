import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Hostpeak')).toBeInTheDocument()
    expect(screen.getByText('Powerful Web Hosting')).toBeInTheDocument()
    expect(screen.getByText('Search Your Domain Now!')).toBeInTheDocument()
    expect(screen.getByText('Trusted by 12,000+ Happy Customers Worldwide')).toBeInTheDocument()
    expect(screen.getByText('Choose Your Own Virtual Space')).toBeInTheDocument()
    expect(screen.getByText('Popular Pricing Package')).toBeInTheDocument()
    expect(screen.getByText('High Quality Service')).toBeInTheDocument()
    expect(screen.getByText('Subscribe To Get Our Newsletter')).toBeInTheDocument()
    expect(screen.getByText(/Dedicated/)).toBeInTheDocument()
    expect(screen.getByText('Happy Customer Says')).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Hostpeak — Web Hosting Template')
  })
})
