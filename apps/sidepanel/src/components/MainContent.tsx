export function MainContent() {
  return (
    <main className="flex-1 bg-page-bg p-8 lg:pl-8">
      <h1 className="mb-6 text-3xl font-bold text-heading-text">SidePanel</h1>

      <div className="space-y-4 text-body-text leading-relaxed">
        <p>
          This is a clean, modern sidebar navigation template. The dark sidebar provides easy access
          to all sections of your site, while the main content area stays bright and readable.
          Perfect for portfolios, dashboards, and documentation sites.
        </p>

        <p>
          The sidebar includes a profile section at the top, followed by navigation links with
          support for dropdown submenus. On mobile devices, the sidebar slides in from the left when
          toggled via the hamburger menu. The active page is highlighted with an accent color for
          clear visual feedback.
        </p>

        <p>
          Built with React and Tailwind CSS, this template is fully responsive and ready to
          customize. Replace the placeholder content with your own and adjust the color scheme to
          match your brand. The sidebar navigation pattern works well for any site that needs
          persistent, always-accessible navigation.
        </p>
      </div>
    </main>
  )
}
