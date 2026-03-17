import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/round-box/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/round-box/"!</div>
}
