import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('shows the section heading and six service cards', () => {
    const { container } = render(<Services />)
    expect(screen.getByRole('heading', { name: 'Top Services We Provided' })).toBeInTheDocument()
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(titles).toHaveLength(6)
    for (const title of [
      'Cloud Hosting',
      'Web Hosting',
      'Cloud Computing',
      'VPS Hosting',
      'Server Analytics',
      'Data Mining',
    ]) {
      expect(titles).toContain(title)
    }
    expect(container.querySelectorAll('svg')).toHaveLength(6)
  })
})
