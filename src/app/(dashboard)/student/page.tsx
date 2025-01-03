import Announcement from "@/components/Announcement"
import BigCalender from "@/components/BigCalender"
import EventCalendar from "@/components/EventCalendar"

const student = () => {

    return <div className="p-4 flex flex-col gap-4 xl:flex-row">
        {/* left */}
        <div className="w-full xl:w-2/3">
            <div className="h-full bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Schedule (4A)</h1>
                <BigCalender/>
            </div>
        </div>

        {/* right */}
        <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
}

export default student