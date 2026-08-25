import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'
import { PANELS } from '../panels'

describe('Accordion', () => {
  it('renders all three panel headers with correct titles and badges', () => {
    render(<Accordion panels={PANELS} />)
    expect(screen.getByRole('button', { name: /My Files/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Mail/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Cloud/ })).toBeInTheDocument()
    expect(screen.getByText('349')).toBeInTheDocument()
    expect(screen.getByText('89')).toBeInTheDocument()
    expect(screen.getByText('102')).toBeInTheDocument()
  })

  it('opens My Files by default and collapses the others', () => {
    render(<Accordion panels={PANELS} />)
    expect(screen.getByRole('button', { name: /My Files/ })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('button', { name: /Mail/ })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: /Cloud/ })).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows My Files service rows when open', () => {
    render(<Accordion panels={PANELS} />)
    expect(screen.getByText('Dropbox')).toBeInTheDocument()
    expect(screen.getByText('Skydrive')).toBeInTheDocument()
    expect(screen.getByText('FTP Server')).toBeInTheDocument()
    expect(screen.getByText('Google Drive')).toBeInTheDocument()
    expect(screen.getByText('OneDrive')).toBeInTheDocument()
  })

  it('hides Mail and Cloud rows when closed', () => {
    render(<Accordion panels={PANELS} />)
    expect(screen.queryByText('Gmail')).not.toBeInTheDocument()
    expect(screen.queryByText('AWS S3')).not.toBeInTheDocument()
  })

  it('opens Mail panel on click and closes My Files (single-open)', async () => {
    const user = userEvent.setup()
    render(<Accordion panels={PANELS} />)
    await user.click(screen.getByRole('button', { name: /Mail/ }))
    expect(screen.getByRole('button', { name: /Mail/ })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /My Files/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByText('Gmail')).toBeInTheDocument()
    expect(screen.queryByText('Dropbox')).not.toBeInTheDocument()
  })

  it('opens Cloud panel on click and closes Mail', async () => {
    const user = userEvent.setup()
    render(<Accordion panels={PANELS} />)
    await user.click(screen.getByRole('button', { name: /Mail/ }))
    await user.click(screen.getByRole('button', { name: /Cloud/ }))
    expect(screen.getByRole('button', { name: /Cloud/ })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /Mail/ })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText('AWS S3')).toBeInTheDocument()
    expect(screen.queryByText('Gmail')).not.toBeInTheDocument()
  })

  it('each panel body is a labelled region', () => {
    render(<Accordion panels={PANELS} />)
    const region = screen.getByRole('region', { name: /My Files/ })
    expect(region).toBeInTheDocument()
    expect(region).toHaveAttribute('aria-labelledby', 'my-files-toggle')
  })

  it('closes the open panel when clicked again (toggle off)', async () => {
    const user = userEvent.setup()
    render(<Accordion panels={PANELS} />)
    // My Files is open by default — clicking it again should close it
    await user.click(screen.getByRole('button', { name: /My Files/ }))
    expect(screen.getByRole('button', { name: /My Files/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    // No panel should be open (no region visible)
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('falls back to FolderOpen for unknown panel ids', () => {
    const unknownPanel = [
      {
        id: 'unknown-id',
        title: 'Other',
        badge: '42',
        rows: [{ number: '01', name: 'Test', count: '1' }],
      },
    ]
    render(<Accordion panels={unknownPanel} />)
    // Should not crash — falls back to FolderOpen icon
    expect(screen.getByRole('button', { name: /Other/ })).toBeInTheDocument()
  })

  it('has no chevron icons', () => {
    const { container } = render(<Accordion panels={PANELS} />)
    const chevrons = container.querySelectorAll('[data-icon="chevron"]')
    expect(chevrons).toHaveLength(0)
  })
})
