import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router"
import { PageContainer } from "./components/custom/PageContainer"
import HomePage from "./views/HomePage"
import Nav from "./components/custom/Nav"
import Footer from "./components/custom/Footer"
import LoginPage from "./views/LoginPage"
import { AddToCalendarButton } from "add-to-calendar-button-react";

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

const rootRoute = createRootRoute({
    component: () => (
        <>
            <PageContainer className="flex flex-col min-h-screen">
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

const homeRoute2 = createRoute({
    getParentRoute: () => rootRoute,
    path: "wedding",
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
            <Nav />
            <h1>agenda</h1>
            <Footer />
        </>
    )
})

const invitationRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "invitation",
    component: () => (
        <>
            <Nav />
            <AddToCalendarButton
                name="Daniella & Zoltán Polgári Esküvő"
                description="Szeretettel várunk a polgári esküvőnkre, és az utánna lévő étkezésre!"
                startDate="2025-07-05"
                startTime="14:00"
                endTime="18:00"
                timeZone="Europe/Budapest"
                location="Budapest, Jász u. 18, 1135"
                options="'Apple','Google'"
                hideBranding={true}
            ></AddToCalendarButton>
            <Footer />
        </>
    )
})

const uploadRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "upload",
    component: () => (
        <>
            <Nav />
            <h1>upload</h1>
            <Footer />
        </>
    )
})

const guestListRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "guestList",
    component: () => (
        <>
            <Nav />
            <h1>Guest list</h1>
            <Footer />
        </>
    )
})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "login",
    component: () => (
        <>
            <LoginPage />
            <Footer />
        </>
    )
})

const routeTree = rootRoute.addChildren([
    homeRoute,
    homeRoute2,
    agendaRoute,
    invitationRoute,
    uploadRoute,
    guestListRoute,
    loginRoute,
])

export const router = createRouter({ routeTree })