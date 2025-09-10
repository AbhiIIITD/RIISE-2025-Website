import { Clock } from "lucide-react";

const EventSchedule = () => {
  const scheduleData = [
    {
      time: "09:00 – 10:00",
      event: "Registration",
    },
    {
      time: "10:00 – 10:05",
      event: "Inauguration & Opening Remarks",
    },
    {
      time: "10:05 – 10:10",
      event: "Director's Address",
    },
    {
      time: "10:10 – 11:15",
      event: "Keynote Talks",
    },
    {
      time: "11:15 – 11:30",
      event: "Tea break",
    },
    {
      time: "11:30 – 13:00",
      event: "Flash Talks",
      panels: ["AI and Cyber Security", "AI in Defense", "AI Innovation & Society"],
    },
    {
      time: "13:00 – 14:00",
      event: "Lunch & Networking Break",
    },
    {
      time: "14:00 – 15:30",
      event: "Multiple Sessions",
      sessions: ["Poster Showcase", "Product Demos", "Startup Showcase"],
      additional: ["Drone RoundTable", "Fireside Chat - AI & Product Development"],
    },
    {
      time: "15:00 – 17:20",
      event: "Pitch Cafe",
    },
    {
      time: "15:30 – 17:20",
      event: "Research \"Shark\" Tank",
    },
    {
      time: "17:20 – 17:40",
      event: "Tea break",
    },
    {
      time: "17:40 – 18:30",
      event: "Awards Ceremony, Conclusion and Certificate Distribution",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-600 tracking-widest uppercase">
          Schedule
        </h1>
      </div>

      {/* Schedule Table */}
      <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden">
        <thead className="bg-gray-600 text-white">
          <tr>
            <th className="w-52 py-6 px-8 text-left text-lg font-semibold uppercase tracking-wide">
              Time
            </th>
            <th className="py-6 px-8 text-center text-lg font-semibold uppercase tracking-wide">
              Event Details
            </th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr
              key={index}
              className="border-b-2 border-dashed border-gray-300 hover:bg-gray-100 last:border-none transition-colors"
            >
              {/* Time Cell */}
              <td className="py-6 px-8 font-semibold text-gray-800 align-top flex items-center">
                <Clock size={18} className="text-gray-400 mr-3" />
                <span className="text-base">{item.time}</span>
              </td>

              {/* Event Cell */}
              <td className="py-6 px-8 align-top">
                <div
                  className={`text-lg font-semibold mb-2 ${
                    item.event.toLowerCase().includes("tea break") ||
                    item.event.toLowerCase().includes("lunch")
                      ? "text-green-500"
                      : "text-gray-800"
                  }`}
                >
                  {item.event}
                </div>

                {/* Panels */}
                {item.panels && (
                  <div className="mt-3">
                    <div className="text-sm font-semibold text-gray-500 mb-2">
                      Panel Discussions
                    </div>
                    <ul className="list-none space-y-1">
                      {item.panels.map((panel, panelIndex) => (
                        <li
                          key={panelIndex}
                          className="pl-5 relative text-gray-500 before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
                        >
                          {panel}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sessions */}
                {item.sessions && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <ul className="list-none space-y-1">
                        {item.sessions.map((session, sessionIndex) => (
                          <li
                            key={sessionIndex}
                            className="pl-5 relative text-gray-500 text-sm before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
                          >
                            {session}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item.additional && (
                      <div>
                        <ul className="list-none space-y-1">
                          {item.additional.map((add, addIndex) => (
                            <li
                              key={addIndex}
                              className="pl-5 relative text-gray-500 text-sm before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
                            >
                              {add}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventSchedule;
