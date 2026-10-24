import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the contact strip with real tel and mailto links', () => {
    render(<TopBar />)
    expect(screen.getByText('Call us:')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 234 456 78910' })).toHaveAttribute(
      'href',
      'tel:+123445678910',
    )
    expect(screen.getByText('Email us:')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'hello@amberline.example' })).toHaveAttribute(
      'href',
      'mailto:hello@amberline.example',
    )
  })

  it('renders three labelled social links', () => {
    render(<TopBar />)
    const list = screen.getByRole('list', { name: 'Amberline on social media' })
    expect(within(list).getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com/',
    )
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })
})
