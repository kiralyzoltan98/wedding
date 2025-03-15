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

  return <div className="flex justify-center flex-col sm:flex-row items-center mt-[-10%] mb-4 h-full">
    <div className="pb-[5%] sm:pb-0 sm:pr-[5%]">
      <AddToCalendarButton {...eventProps} />
    </div>
    <img src={saveTheDate} className="stamp-border p-5 max-h-170 object-contain drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]"></img>
    <div className="pt-[5%] sm:pt-0 sm:pl-[5%]">
      <AddToCalendarButton {...eventProps} />
    </div>
  </div>
}