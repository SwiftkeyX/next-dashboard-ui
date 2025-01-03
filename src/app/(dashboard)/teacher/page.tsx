import Announcement from "@/components/Announcement"
import BigCalender from "@/components/BigCalender"
import EventCalendar from "@/components/EventCalendar"

const teacher = () => {

    return <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
        {/* left */}
        <div className="w-full xl:w-2/3">
            <div className="h-full bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Schedule (4A)</h1>
                <BigCalender/>
            </div>
        </div>

        {/* right */}
        <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
}

export default teacher