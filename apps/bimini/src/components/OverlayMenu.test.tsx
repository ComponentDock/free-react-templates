import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { OverlayMenu, type OverlayMenuProps } from './OverlayMenu'
import { BRAND, SHEET_ID, SHEET_LABEL, SHEET_PHOTO } from '../lib/site'
import {
  menuListClass,
  overlayBrandClass,
  overlayBrandHeadingClass,
  overlayClass,
  photoLayerClass,
  sheetCellClass,
  sheetColumnClass,
  sheetRowClass,
  sheetTableClass,
} from '../lib/styles'

function renderSheet(props: Partial<OverlayMenuProps> = {}) {
  const onClose = vi.fn()
  const onNavigate = vi.fn()
  const sheetRef = createRef<HTMLElement>()

  const view = render(
    <OverlayMenu
      isOpen={false}
      isCloseVisible={false}
      onClose={onClose}
      onNavigate={onNavigate}
      sheetRef={sheetRef}
      {...props}
    />,
  )

  return { ...view, onClose, onNavigate, sheetRef }
}

describe('OverlayMenu — the cover drawn over the page', () => {
  it('rests grown away to nothing, and inside the window once it is open', () => {
    const { sheetRef } = renderSheet()

    const sheet = screen.getByTestId('sheet')

    expect(sheet.tagName).toBe('NAV')
    expect(sheet.id).toBe(SHEET_ID)
    expect(sheet.getAttribute('aria-label')).toBe(SHEET_LABEL)
    expect(sheet.getAttribute('tabindex')).toBe('-1')
    expect(sheetRef.current).toBe(sheet)
    expect(sheet.className).toBe(overlayClass(false))
    expect(sheet.className).toContain('fixed')
    expect(sheet.className).toContain('inset-0')
    expect(sheet.className).toContain('h-full')
    expect(sheet.className).toContain('w-full')
    expect(sheet.className).toContain('bg-sheet')
    expect(sheet.className).toContain('z-[1002]')
    expect(sheet.className).toContain('overflow-y-scroll')
    expect(sheet.className).toContain('duration-[800ms]')
    expect(sheet.className).toContain('ease-sheet')
    expect(sheet.className).toContain('invisible')
    expect(sheet.className).toContain('scale-0')
    expect(sheet.className).toContain('opacity-0')
  })

  it('grows to its full size while it is open', () => {
    renderSheet({ isOpen: true })

    const sheet = screen.getByTestId('sheet')

    expect(sheet.className).toBe(overlayClass(true))
    expect(sheet.className).toContain('visible')
    expect(sheet.className).toContain('scale-100')
    expect(sheet.className).toContain('opacity-100')
    expect(sheet.className).not.toContain('scale-0')
  })

  it('lays a full-bleed photograph under a black scrim behind the column', () => {
    renderSheet()

    const photo = screen.getByTestId('sheet-photo')

    expect(photo.className).toBe(photoLayerClass)
    expect(photo.className).toContain('bg-cover')
    expect(photo.className).toContain('bg-center')
    expect(photo.className).toContain('after:bg-scrim')
    expect(photo.style.backgroundImage).toContain(SHEET_PHOTO)
    expect(SHEET_PHOTO).toBe('https://picsum.photos/seed/bimini-1/1920/1080')
  })

  it('centres its column with a real table of one cell', () => {
    const { container } = renderSheet()

    const table = container.querySelector('nav > div:nth-of-type(2)')

    expect(table?.className).toBe(sheetTableClass)
    expect(table?.className).toContain('table')
    expect(table?.className).toContain('h-full')

    const cell = table?.firstElementChild

    expect(cell?.className).toBe(sheetCellClass)
    expect(cell?.className).toContain('table-cell')
    expect(cell?.className).toContain('align-middle')

    const row = cell?.firstElementChild

    expect(row?.className).toBe(sheetRowClass)
    expect(row?.className).toContain('justify-center')

    const column = row?.firstElementChild

    expect(column?.className).toBe(sheetColumnClass)
    expect(column?.className).toContain('px-[15px]')
  })

  it('holds nothing but the wordmark and the four labels, so they land where the design measures', () => {
    renderSheet()

    const brand = screen.getByTestId('sheet-brand')

    expect(brand).toHaveTextContent(BRAND)
    expect(brand.className).toBe(overlayBrandClass)
    expect(brand.className).toContain('text-[40px]')
    expect(brand.parentElement?.className).toBe(overlayBrandHeadingClass)
    expect(brand.parentElement?.tagName).toBe('H1')

    expect(screen.getByTestId('sheet-menu').className).toBe(menuListClass)
    expect(screen.getByTestId('sheet').querySelectorAll('p')).toHaveLength(0)
    expect(screen.getByTestId('sheet-menu').children).toHaveLength(4)
  })

  it('hands the close control and every label through to the state above it', () => {
    const { onClose, onNavigate } = renderSheet({ isCloseVisible: true })

    screen.getByTestId('close').click()

    expect(onClose).toHaveBeenCalledTimes(1)

    const label = screen.getByTestId('row-canvas').querySelector('a') as HTMLAnchorElement

    label.click()

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('keeps the close control out of the way until it is told it may settle in', () => {
    renderSheet({ isOpen: true })

    expect(screen.getByTestId('close')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByTestId('close').className).toContain('invisible')
  })
})
