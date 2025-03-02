import { AddToCalendarButton, AddToCalendarButtonType } from "add-to-calendar-button-react"
import saveTheDate from "../assets/save-the-date.jpg"

export default function InvitationPage() {

  const eventProps: AddToCalendarButtonType = {
    name: "Daniella & Zoltán Polgári Esküvő",
    description: "Szeretettel várunk a polgári esküvőnkre, és az utánna lévő étkezésre!",
    startDate: "2025-07-05",
    startTime: "14:00",
    endTime: "18:00",
    timeZone: "Europe/Budapest",
    location: "Budapest, Jász u. 18, 1135",
    options: "'Apple','Google'",
    hideBranding: true,
  }

  return <div className="flex justify-center items-center mt-[-10%] mb-4">
    <AddToCalendarButton {...eventProps} />
    <img src={saveTheDate} className="size-dvh object-contain drop-shadow-lg"></img>
    <AddToCalendarButton {...eventProps} />
  </div>
}