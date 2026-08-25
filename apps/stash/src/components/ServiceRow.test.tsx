import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceRow } from './ServiceRow'

describe('ServiceRow', () => {
  const sampleRow = { number: '01', name: 'Dropbox', count: '21' }

  it('renders the row number, service name, and count pill', () => {
    render(
      <ul>
        <ServiceRow row={sampleRow} />
      </ul>,
    )
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('Dropbox')).toBeInTheDocument()
    expect(screen.getByText('21')).toBeInTheDocument()
  })

  it('applies the correct styling classes', () => {
    const { container } = render(
      <ul>
        <ServiceRow row={sampleRow} />
      </ul>,
    )
    const li = container.querySelector('li')!
    expect(li.className).toContain('flex')
    expect(li.className).toContain('items-center')
    expect(li.className).toContain('justify-between')
    expect(li.className).toContain('border-b')
    expect(li.className).toContain('border-separator')
    expect(li.className).toContain('px-[30px]')
    expect(li.className).toContain('py-[15px]')
  })

  it('renders the number span with faint styling', () => {
    render(
      <ul>
        <ServiceRow row={sampleRow} />
      </ul>,
    )
    const numSpan = screen.getByText('01')
    expect(numSpan.className).toContain('font-light')
    expect(numSpan.className).toContain('text-row-number')
  })

  it('renders the count pill as a rounded badge', () => {
    const { container } = render(
      <ul>
        <ServiceRow row={sampleRow} />
      </ul>,
    )
    const li = container.querySelector('li')!
    const pill = li.querySelector(':scope > span:last-child')!
    expect(pill.className).toContain('rounded-[40px]')
    expect(pill.className).toContain('border-pill-border')
    expect(pill.className).toContain('text-[16px]')
  })
})
