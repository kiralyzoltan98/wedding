import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router"
import { PageContainer } from "./components/custom/PageContainer"
import HomePage from "./views/HomePage"
import Nav from "./components/custom/Nav"

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

const rootRoute = createRootRoute({
    component: () => (
        <>
            <PageContainer>
                <Nav />
                <Outlet />
            </PageContainer>
        </>
    )
})

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => (
        <>
            <HomePage />
        </>
    )
})

const agendaRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "agenda",
    component: () => (
        <>
            <h1>agenda</h1>
        </>
    )
})

const invitationRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "invitation",
    component: () => (
        <>
            <h1>invitation</h1>
        </>
    )
})

const uploadRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "upload",
    component: () => (
        <>
            <h1>upload</h1>
        </>
    )
})

const guestListRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "guestList",
    component: () => (
        <>
            <h1>Guest list</h1>
        </>
    )
})

const routeTree = rootRoute.addChildren([
    homeRoute,
    agendaRoute,
    invitationRoute,
    uploadRoute,
    guestListRoute,
])

export const router = createRouter({ routeTree })