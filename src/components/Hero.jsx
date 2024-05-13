import { clients } from "../constants";

const Hero = () => {
  return (
    <section className="px-5">
      <div className="text-secondary">
        <h1 className="font-bold text-4xl py-5">Welcome, User!</h1>
        <h2 className="font-semibold text-2xl">Upcoming Meetings</h2>
      </div>

      <div className="py-5">
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <h2>{client.name}</h2>
              <p>{client.email}</p>
              <ul>
                {client.availability.map((timeSlot) => (
                  <li key={timeSlot.day}>
                    <p>
                      {timeSlot.day} : {timeSlot.time}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
