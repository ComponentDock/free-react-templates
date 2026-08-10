import { SidebarContent } from './SidebarContent'

export function Sidebar() {
  return (
    <aside aria-label="Sidebar" className="fixed inset-y-0 left-0 z-30 hidden w-1/4 lg:block">
      <SidebarContent />
    </aside>
  )
}
