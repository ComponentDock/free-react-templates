import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and six service cards with green icons', () => {
    const { container } = render(<Services />)
    expect(screen.getByRole('heading', { name: 'Cloud Services' })).toBeInTheDocument()
    for (const title of [
      'Cloud databases',
      'Website Hosting',
      'File Storage',
      'Forex Trading',
      'File Backups',
      'Remote Desktop',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    const icons = container.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(6)
  })
})
